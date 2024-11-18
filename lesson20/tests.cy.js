import LoginDetails from "../lesson18/loginDetails.js";
import SignUp from "../lesson20/signUp.js";
import GaragePage from "../lesson20/garage.js";
import { expensesPage } from "../lesson20/expenses.js";

let loginDetails;
let signUpInstance;
signUpInstance = new SignUp();
const garagePageInstance = new GaragePage();

describe("Qauto login", () => {
  before(() => {
    loginDetails = new LoginDetails();
  });

  beforeEach(() => {
    loginDetails.navigateToMainPageWithLogin();
    signUpInstance.signIn();
  });

  it("Add a car", () => {
    garagePageInstance.selectors.addCarButton().click();
    garagePageInstance.addCar("Audi", "R8", "12");
    garagePageInstance.selectors.addCarConfirm().click();
  });

  it("Add expenses", () => {
    expensesPage.selectors.optionMenu().click();
    expensesPage.addExpense();
    expensesPage.addLiters();
    expensesPage.addCost();
    expensesPage.addData();
  });
});
