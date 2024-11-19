import LoginDetails from "../lesson18/loginDetails.js";
import GaragePage from "/lesson20/garage.js";
import { expensesPage } from "../lesson20/expenses.js";

let loginDetails;
let garagePageInstance;

describe("Qauto login", () => {
  before(() => {
    loginDetails = new LoginDetails();
    garagePageInstance = new GaragePage();
  });

  beforeEach(() => {
    loginDetails.navigateToMainPageWithLogin();
  });

  it("Add a car", () => {
    garagePageInstance.selectors.addCarButton().click();
    garagePageInstance.addCar("Audi", "R8", "12");
    garagePageInstance.selectors.addCarConfirm().click();
  });

  it("Add expenses", () => {
    expensesPage.selectors.optionMenu().click();
    expensesPage.addExpense();
    expensesPage.selectors.addLiters();
    expensesPage.selectors.addCost();
    // expensesPage.selectors.addData();
  });
});
