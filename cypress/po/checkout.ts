export class Checkout {
  typeFirstName(firstName: string) {
    cy.get('[data-test="firstName"]').type(firstName);
  }

  typeLastName(lastName: string) {
    cy.get('[data-test="lastName"]').type(lastName);
  }

  typePostalCode(postalCode: string) {
    cy.get('[data-test="postalCode"]').type(postalCode);
  }

  clickContinueButton() {
    cy.get('[data-test="continue"]').click();
  }

  validSummary(firstName: string, lastName: string, postalCode: string) {
    this.typeFirstName(firstName);
    this.typeLastName(lastName);
    this.typePostalCode(postalCode);
  }

  clickFinishButton() {
    cy.get('[data-test="finish"]').click();
  }

  getFinishInfo() {
    return cy.get("#checkout_complete_container");
  }
}
