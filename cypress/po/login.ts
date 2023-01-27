export class Login {
  typeUsername(username: string): Login {
    cy.get('[data-test="username"]').type(username);
    return this;
  }

  typePassword(password: string): Login {
    cy.get('[data-test="password"]').type(password);
    return this;
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
