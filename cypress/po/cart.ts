export class Cart {
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

  getRemovedCartStatus() {
    return cy.get(".removed_cart_item");
  }
}
