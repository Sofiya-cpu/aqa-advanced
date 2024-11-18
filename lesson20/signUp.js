class SignUp {
  selectors = {
    clickSignUp: () =>
      cy.get("button[class='btn btn-outline-white header_signin']"),
    emailLogin: () => cy.get("input#signinEmail"),
    pwLogin: () => cy.get("input#signinPassword"),
    clickLogin: () => cy.get("button[class='btn btn-primary']"),
  };

  signIn() {
    const userEmail = Cypress.env("userEmail");
    const userPassword = Cypress.env("userPassword");

    const baseUrl = Cypress.config("baseUrl");
    console.log("Base URL:", baseUrl);

    cy.visit(baseUrl);

    this.selectors.emailLogin().type(userEmail);
    this.selectors.pwLogin().type(userPassword);
    this.selectors.clickLogin().click();
  }
}

export default SignUp;
//comment
