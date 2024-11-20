import LoginDetails from "/lesson21/loginDetails.js";
import GaragePage from "../lesson20/garage.js";

let carId;
let loginDetails;
let garagePageInstance;

garagePageInstance = new GaragePage();

describe("New car created and validated", () => {
  before(() => {
    loginDetails = new LoginDetails();
    cy.request("POST", "/api/auth/signin", {
      email: "sovka@ukr.net",
      password: "Mghxyrm123",
    }).then((response) => {
      expect(response.status).to.equal(200);

      cy.getCookie("sid")
        .should("exist")
        .then((cookie) => {
          const sid = cookie.value;
          cy.log(`Session ID: ${sid}`);
          cy.setCookie("sid", sid);
        });
    });
  });

  beforeEach(() => {
    loginDetails.navigateToMainPageWithLogin();
  });

  it("Create a new car and intercept the API response", () => {
    cy.intercept("POST", "/api/cars").as("newCar");

    // UI
    garagePageInstance.selectors.addCarButton().click();
    garagePageInstance.addCar("Audi", "R8", "12");
    garagePageInstance.selectors.addCarConfirm().click();

    cy.wait("@newCar").then((interception) => {
      expect(interception.response.statusCode).to.eq(201);
      carId = interception.response.body.id;
      cy.log(`Created Car ID: ${carId}`);
    });
  });

  it("Validate car exists via API", () => {
    cy.request({
      method: "GET",
      url: "https://qauto.forstudy.space/api/cars",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);

      const createdCar = response.body.cars.find((car) => car.id === carId);

      expect(createdCar).to.exist;
      expect(createdCar.brand).to.eq("Audi");
      expect(createdCar.model).to.eq("R8");
      expect(createdCar.mileage).to.eq(12);
    });
  });
});
