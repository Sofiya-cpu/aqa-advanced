import LoginDetails from "../lesson18/loginDetails.cy.js";
import MainPage from "../lesson18/mainPage.cy.js";

// it("Hw login", () => {
//   cy.visit("https://qauto.forstudy.space/", {
//     auth: {
//       username: "guest",
//       password: "welcome2qauto",
//     },
//   });
//   cy.log("test");
// });

describe("Test suite for header&footer buttons", () => {
  before(() => {
    loginDetails.navigateToMainPageWithLogin();
  });
});

it("Should find the Home button", () => {
  new MainPage().homeButton().should("exist");
});

it("Should find the About button", () => {
  new MainPage().aboutButton().should("exist");
});
