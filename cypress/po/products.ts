export class Products {
  getShoppingCart() {
    return cy.get("#shopping_cart_container");
  }

  addProduct() {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  sortProductsBy(option: string): Products {
    cy.get('[data-test="product_sort_container"]').select(option, {
      force: true,
    });
    return this;
  }

  getInventoryNames() {
    return cy.get(".inventory_item_name");
  }

  getInventoryPrices() {
    return cy.get(".inventory_item_price");
  }
}
