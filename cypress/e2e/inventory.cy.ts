import { Login } from "../po/login";
import { Products } from "../po/products";

const login = new Login();
const products = new Products();

describe("inventory view", () => {
  beforeEach(() => {
    cy.visit("/", {});
  });

  it("should sort products by name (A to Z)", () => {
    login.validLogin(Cypress.env("login"), Cypress.env("password"));
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
    cy.get(".inventory_item_name").should(($elements) => {
      const results = $elements.map((index, el) => el.innerText).get();
      const sortedResults = results.sort();
      expect(results).to.deep.equal(sortedResults);
    });
  });
});
