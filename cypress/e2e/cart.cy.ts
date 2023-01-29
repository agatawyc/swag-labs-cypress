import { faker } from "@faker-js/faker";
import { Cart } from "../po/cart";
import { Checkout } from "../po/checkout";
import { Login } from "../po/login";
import { Products } from "../po/products";

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const postalCode = faker.address.zipCode();

const login = new Login();
const products = new Products();
const checkout = new Checkout();
const cart = new Cart();

describe("Cart workflow", () => {
  beforeEach(() => {
    cy.visit("/", {});
  });
  it("should buy a product", () => {
    login.validLogin(Cypress.env("login"), Cypress.env("password"));
    products.addProduct();
    products.getShoppingCart().click();
    cart.getQuantity().should("have.text", "1");
    cart.getProductName().should("have.text", "Sauce Labs Backpack");
    cart.clickCheckoutButton();
    checkout.validSummary(firstName, lastName, postalCode);
    checkout.clickContinueButton();
    checkout.clickFinishButton();
    checkout.getFinishInfo().should("be.visible");
  });

  it("Should remove a product from the cart", () => {
    login.validLogin(Cypress.env("login"), Cypress.env("password"));
    products.addProduct();
    products.getShoppingCart().click();
    cart.removeProduct();
    cart.getRemovedCartStatus().should("exist");
  });
});
