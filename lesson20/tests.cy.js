import prodConfig from "../cypress/config/prod.json";
import devConfig from "../cypress/config/dev.json";
import LoginDetails from "/lesson20/loginDetails.js";
import GaragePage from "/lesson20/garage.js";
import ExpensesPage from "/lesson20/expenses.js";

const environment = Cypress.env("configFile") || "prod"; // prod or dev
const config = environment === "prod" ? prodConfig : devConfig;
const { baseUrl, env } = config;

let garagePageInstance;
let expensesPageInstance;
let loginDetails;
garagePageInstance = new GaragePage();
expensesPageInstance = new ExpensesPage();

describe("Qauto login", () => {
  before(() => {
    loginDetails = new LoginDetails();
  });

  beforeEach(() => {
    loginDetails.navigateToMainPageWithLogin();
    //cy.visit(baseUrl);
    cy.get("button[class='btn btn-outline-white header_signin']").click();
    cy.get("#signinEmail").type(env.userEmail);
    cy.get("#signinPassword").type(env.userPassword);
    cy.get("button[class='btn btn-primary']").click();
  });

  it("Add a car", () => {
    garagePageInstance.selectors.addCarButton().click();
    garagePageInstance.addCar("Audi", "R8", "12");
    garagePageInstance.selectors.addCarConfirm().click();
  });

  it("Add expenses", () => {
    expensesPageInstance.selectors.optionMenu().click();
    expensesPageInstance.selectors.addExpense().click();
    expensesPageInstance.selectors.deleteMileage().clear();
    expensesPageInstance.selectors.changeMileage("2000");
    expensesPageInstance.selectors.addLiters("20");
    expensesPageInstance.selectors.addCost("45000");
    expensesPageInstance.selectors.confirmAddExpense().click();
  });
});
