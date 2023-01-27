import { faker } from "@faker-js/faker";
import { Checkout } from "../po/checkout";
import { Login } from "../po/login";
import { Products } from "../po/products";

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const postalCode = faker.address.zipCode();

const login = new Login();
const products = new Products();
const checkout = new Checkout();

describe("Cart workflow", () => {
  beforeEach(() => {
    cy.visit("/", {});
  });
  it("should buy a product", () => {
    login.validLogin("standard_user", "secret_sauce");
    products.getShoppingCart().should("be.visible");
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
    products.addProduct();
    products.getShoppingCart().click();
    products.getQuantity().should("have.text", "1");
    products.getProductName().should("have.text", "Sauce Labs Backpack");
    products.clickCheckoutButton();
    products.checkoutSummary().should("be.visible");
    checkout.validSummary(firstName, lastName, postalCode);
    checkout.clickContinueButton();
    checkout.getCheckoutInfo().should("be.visible");
    checkout.clickFinishButton();
    checkout.getFinishInfo().should("be.visible");
  });

  it("Should remove a product from the cart", () => {
    login.validLogin("standard_user", "secret_sauce");
    products.getShoppingCart().should("be.visible");
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
    products.addProduct();
    products.getShoppingCart().click();
    products.getQuantity().should("have.text", "1");
    products.getProductName().should("have.text", "Sauce Labs Backpack");
    products.removeProduct();
    cy.get('[class="removed_cart_item"]').should("exist");
  });
});
