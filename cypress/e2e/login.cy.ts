import { Login } from "../po/login";
import { Products } from "../po/products";

const login = new Login();
const products = new Products();

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/", {});
  });

  it("should log in", () => {
    login.validLogin(Cypress.env("login"), Cypress.env("password"));
    products.getShoppingCart().should("be.visible");
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
  });

  it("should not log in", () => {
    login
      .typeUsername(Cypress.env("login"))
      .typePassword("wrong_password")
      .clickLoginButton();
    login
      .getError()
      .should(
        "have.text",
        "Epic sadface: Username and password do not match any user in this service"
      );
  });
});
