import LoginDetails from "./loginDetails.js";
import MainPage from "./mainPage.js";

describe("Test suite for header&footer buttons", () => {
  let loginDetails;
  before(() => {
    loginDetails = new LoginDetails();
  });
  beforeEach(() => {
    loginDetails.navigateToMainPageWithLogin();
  });

  it("Should find the Home button", () => {
    new MainPage().homeButton().should("exist");
  });

  it("Should find the About button", () => {
    new MainPage().aboutButton().should("exist");
  });

  it("Should find the Contacts button", () => {
    new MainPage().contactsButton().should("exist");
  });

  it("Should find login for guests", () => {
    new MainPage().guestLogIn().should("exist");
  });

  it("Should find Signin button", () => {
    new MainPage().signInButton().should("exist");
  });

  it("Should find Facebook button", () => {
    new MainPage().socialsFacebook().should("exist");
  });

  it("Should find Telegram button", () => {
    new MainPage().socialsTelegram().should("exist");
  });

  it("Should find Youtube button", () => {
    new MainPage().socialsYoutube().should("exist");
  });

  it("Should find Instagram button", () => {
    new MainPage().socialsInstagram().should("exist");
  });

  it("Should find LinkedIn button", () => {
    new MainPage().socialsLinkedin().should("exist");
  });

  it("Should find Hillel button", () => {
    new MainPage().hillelWebsite().should("exist");
  });

  it("Should find 'Mail to Hillel' button", () => {
    new MainPage().hillelMailTo().should("exist");
  });
});
