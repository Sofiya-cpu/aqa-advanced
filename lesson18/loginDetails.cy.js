class LoginDetails {
  defaultCredentials = {
    username: "guest",
    password: "welcome2qauto",
  };

  navigateToMainPageWithLogin(credentials = this.defaultCredentials) {
    cy.visit("https://qauto.forstudy.space/", { auth: credentials });
  }
}
const loginDetails = new LoginDetails();
export default LoginDetails;
