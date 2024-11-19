class LoginDetails {
  defaultCredentials = {
    username: "guest",
    password: "welcome2qauto",
  };

  // get URL based on env
  getBaseUrl() {
    const environment = Cypress.env("configFile") || "prod"; // by default
    if (environment === "dev") {
      return "https://qauto2.forstudy.space/panel/expenses"; // URL for DEV
    }
    return "https://qauto.forstudy.space"; // URL for PROD
  }

  navigateToMainPageWithLogin() {
    const baseUrl = this.getBaseUrl();
    cy.visit(baseUrl, {
      auth: this.defaultCredentials, // creds
    });
  }
}

export default LoginDetails;
