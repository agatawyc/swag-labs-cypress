export class Products {
  getShoppingCart() {
    return cy.get("#shopping_cart_container");
  }

  addProduct() {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }
}
