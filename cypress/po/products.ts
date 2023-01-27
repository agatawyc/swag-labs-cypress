export class Products {
  getShoppingCart() {
    return cy.get("#shopping_cart_container");
  }
  addProduct() {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }
  getQuantity() {
    return cy.get(".cart_quantity");
  }
  getProductName() {
    return cy.get(".inventory_item_name");
  }
  clickCheckoutButton() {
    cy.get('[data-test="checkout"]').click();
  }
  checkoutSummary() {
    return cy.get("#checkout_info_container");
  }
  removeProduct() {
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
  }
}
