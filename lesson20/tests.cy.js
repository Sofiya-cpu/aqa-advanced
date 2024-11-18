import LoginDetails from "../lesson18/loginDetails.js";
import SignUp from "../lesson20/signUp.js";
import GaragePage from "../lesson20/garage.js";
import { expensesPage } from "../lesson20/expenses.js";

let signUpInstance;
const garagePageInstance = new GaragePage();
let loginDetails;

describe("Qauto login", () => {
  before(() => {
    loginDetails = new LoginDetails();
    signUpInstance = new SignUp();
  });

  beforeEach(() => {
    loginDetails.navigateToMainPageWithLogin();
    signUpInstance.signIn();
  });

  it("Add a car", () => {
    garagePageInstance.selectors.addCarButton().click();
    garagePageInstance.addCar("Audi", "R8", "12");
    cy.url().should("include", "/panel/garage");
  });

  it("Add fuel expenses", () => {
    expensesPage.visit();
    expensesPage.addExpense();
    cy.contains("Expense added successfully").should("be.visible");
  });
});
