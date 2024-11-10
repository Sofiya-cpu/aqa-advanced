class LoginDetails {
  defaultCredentials = {
    username: "guest",
    password: "welcome2qauto",
  };

  navigateToMainPageWithLogin() {
    cy.visit("https://qauto.forstudy.space/", {
      auth: this.defaultCredentials,
    });
  }
}
export default LoginDetails;
