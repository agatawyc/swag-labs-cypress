export class Login {
  typeUsername(username: string) {
    cy.get('[data-test="username"]').type(username);
  }
  typePassword(password: string) {
    cy.get('[data-test="password"]').type(password);
  }
  clickLoginButton() {
    cy.get('[data-test="login-button"]').click();
  }
  validLogin(username: string, password: string) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLoginButton();
  }
  getError() {
    return cy.get('[data-test="error"]');
  }
}
