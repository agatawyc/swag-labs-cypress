import { Login } from "../po/login";
import { Products } from "../po/products";

const login = new Login();
const products = new Products();

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/", {});
  });

  it("should log in", () => {
    login.validLogin("standard_user", "secret_sauce");
    products.getShoppingCart().should("be.visible");
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
  });

  it("should not log in", () => {
    login
      .typeUsername("standard_user")
      .typePassword("wrong_password")
      .clickLoginButton();
    login
      .getError()
      .should("exist")
      .and(
        "have.text",
        "Epic sadface: Username and password do not match any user in this service"
      );
  });
});
