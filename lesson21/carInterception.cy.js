import LoginDetails from "/lesson21/loginDetails.js";
import GaragePage from "../lesson20/garage.js";

let token;
let carId;
let loginDetails;
let garagePageInstance;

garagePageInstance = new GaragePage();

describe("API testing with Cypress", () => {
  beforeEach(() => {
    loginDetails = new LoginDetails();
    cy.request("POST", "/api/auth/signin", {
      email: "sovka@ukr.net",
      password: "Mghxyrm123",
    }).then((response) => {
      expect(response.status).to.equal(200);

      token = response.body.token;
      localStorage.setItem("sid", token); // store
      cy.log("Token stored:", token); // log
      loginDetails.navigateToMainPageWithLogin();
    });
  });

  it("New car created, status validated, car ID saved", () => {
    const token = localStorage.getItem("sid");
    cy.intercept("POST", "/api/cars").as("newCar");

    // UI
    garagePageInstance.selectors.addCarButton().click();
    garagePageInstance.addCar("Audi", "R8", "12");
    garagePageInstance.selectors.addCarConfirm().click();

    cy.wait("@newCar").then((interception) => {
      expect(interception.response.statusCode).to.equal(201);
      carId = interception.response.body.data.id; // get car ID
      cy.log(`Created Car ID: ${carId}`);
    });
  });

  it("Verify list contains the intercepted car id", () => {
    const token = localStorage.getItem("sid");
    cy.request({
      method: "GET",
      url: "/api/cars",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);

      // car Id in the list of cars
      const carExists = response.body.data.some((car) => car.id === carId);
      expect(carExists).to.be.true;
    });
  });
});

it("Verify expense on the car", () => {
  cy.createExpense(carId, "2021-05-17", 111, 11, 11, false);
});

after(() => {
  cy.writeFile("cypress/fixtures/carId.json", { carId }); // save the ID as fixture
});
