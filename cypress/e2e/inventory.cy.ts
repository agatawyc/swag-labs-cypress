import { Login } from "../po/login";
import { Products } from "../po/products";

const login = new Login();
const products = new Products();

describe("Inventory view", () => {
  beforeEach(() => {
    cy.visit("/", {});
  });

  it("Should sort products by name (A to Z)", () => {
    login.validLogin(Cypress.env("login"), Cypress.env("password"));
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
    products.sortProductsBy("Name (A to Z)");
    products.getInventoryNames().should(($elements) => {
      const results = $elements.map((_index, el) => el.innerText).get();
      const sortedResults = results.sort();
      expect(results).to.deep.equal(sortedResults);
    });
  });

  it("Should sort products by name (Z to A)", () => {
    login.validLogin(Cypress.env("login"), Cypress.env("password"));
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
    products.sortProductsBy("Name (Z to A)");
    products.getInventoryNames().should(($elements) => {
      const results = $elements.map((_index, el) => el.innerText).get();
      const sortedResults = results.sort().reverse();
      expect(results).to.deep.equal(sortedResults);
    });
  });
});
