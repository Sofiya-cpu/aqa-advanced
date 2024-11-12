import LoginDetails from "../lesson18/loginDetails.js";
import "../cypress/support/commands.js";

let loginDetails;

describe("Annoying website pop-up with login", () => {
  before(() => {
    loginDetails = new LoginDetails();
    loginDetails.navigateToMainPageWithLogin();
  });

  it("Logs automatically via custom command", () => {
    cy.login("sovka100@ukr.net", "Mghxyrm123!");
  });
});
