import LoginDetails from "./loginDetails.js";
import MainPage from "./mainPage.js";

let loginDetails;
let mainPage;

describe("Test suite for header&footer buttons", () => {
  before(() => {
    loginDetails = new LoginDetails();
    mainPage = new MainPage(); // instances
  });

  beforeEach(() => {
    loginDetails.navigateToMainPageWithLogin();
  });

  afterEach(() => {
    const testName = Cypress.currentTest.title;
    cy.screenshot(testName);
  });

  it("Should find the Home button", () => {
    mainPage.homeButton().should("exist");
  });

  it("Should find the About button", () => {
    mainPage.aboutButton().should("exist");
  });

  it("Should find the Contacts button", () => {
    mainPage.contactsButton().should("exist");
  });

  it("Should find login for guests", () => {
    mainPage.guestLogIn().should("exist");
  });

  it("Should find Signin button", () => {
    mainPage.signInButton().should("exist");
  });

  it("Should find Facebook button", () => {
    mainPage.socialsFacebook().should("exist");
  });

  it("Should find Telegram button", () => {
    mainPage.socialsTelegram().should("exist");
  });

  it("Should find Youtube button", () => {
    mainPage.socialsYoutube().should("exist");
  });

  it("Should find Instagram button", () => {
    mainPage.socialsInstagram().should("exist");
  });

  it("Should find LinkedIn button", () => {
    mainPage.socialsLinkedin().should("exist");
  });

  it("Should find Hillel button", () => {
    mainPage.hillelWebsite().should("exist");
  });

  it("Should find 'Mail to Hillel' button", () => {
    mainPage.hillelMailTo().should("exist");
  });
});
