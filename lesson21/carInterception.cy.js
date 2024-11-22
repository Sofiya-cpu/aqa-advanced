import LoginDetails from "/lesson21/loginDetails.js";
import GaragePage from "../lesson20/garage.js";

let carId;
let loginDetails;
let garagePageInstance;

garagePageInstance = new GaragePage();

describe("API testing with Cypress", () => {
  beforeEach(() => {
    loginDetails = new LoginDetails();

    // API LOGIN
    cy.request("POST", "https://qauto.forstudy.space/api/auth/signin", {
      email: "sovka@ukr.net",
      password: "Mghxyrm123",
    }).then((response) => {
      expect(response.status).to.equal(200);

      loginDetails.navigateToMainPageWithLogin();
    });
  });

  it("Create a car", () => {
    cy.intercept("POST", "/api/cars").as("newCar");

    // UI
    garagePageInstance.selectors.addCarButton().click();
    garagePageInstance.addCar("Audi", "R8", "12");
    garagePageInstance.selectors.addCarConfirm().click();

    cy.wait("@newCar").then((interception) => {
      expect(interception.response.statusCode).to.equal(201);
      carId = interception.response.body.data.id; // get carId
      cy.log(`Created Car ID: ${carId}`);

      // SAVE TO FIXTURE
      cy.writeFile("cypress/fixtures/carId.json", { carId });
    });
  });

  it("Verify list contains the intercepted car id", () => {
    cy.fixture("carId.json").then((data) => {
      carId = data.carId; //  carId from fixture

      cy.getCookie("sid").then((cookie) => {
        const sidToken = cookie.value;

        cy.request({
          method: "GET",
          url: "https://qauto.forstudy.space/api/cars",
          headers: {
            Cookie: `sid=${sidToken}`, //  SID
          },
        }).then((response) => {
          expect(response.status).to.equal(200);

          const carExists = response.body.data.some((car) => car.id === carId);
          expect(carExists).to.be.true;
        });
      });
    });
  });

  it("Verify expense on the car", () => {
    cy.fixture("carId.json").then((data) => {
      carId = data.carId; // taken from fixture

      cy.getCookie("sid").then((cookie) => {
        const sidToken = cookie.value;

        // Current date
        const currentDate = new Date().toISOString().split("T")[0];

        cy.request({
          method: "POST",
          url: "https://qauto.forstudy.space/api/expenses",
          headers: {
            Cookie: `sid=${sidToken}`,
            "Content-Type": "application/json",
          },
          body: {
            carId: carId,
            reportedAt: currentDate,
            mileage: 111,
            liters: 11,
            totalCost: 11,
            forceMileage: false,
          },
        }).then((response) => {
          expect(response.status).to.equal(200);
        });
      });
    });
  });

  it("Find the car and verify the expense", () => {
    const expenseData = {
      mileage: 111,
      liters: 11,
      totalCost: 11,
      // change date fomat variations
      reportedAt: new Date().toLocaleDateString("uk-UA", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
    };

    cy.get(
      "a.btn.btn-white.btn-sidebar.sidebar_btn[href='/panel/expenses']"
    ).click();

    cy.get(".panel-page_content", { timeout: 10000 }).should("exist");

    cy.get("td[class='font-weight-bold']").should(
      "contain.text",
      expenseData.reportedAt
    );
    cy.get("td:nth-child(2):not(.font-weight-bold)").should(
      "contain.text",
      expenseData.mileage
    );

    cy.get("td:nth-child(3):not(.font-weight-bold)").should(
      "contain.text",
      expenseData.liters
    );
    cy.get("td:nth-child(4):not(.font-weight-bold").should(
      "contain.text",
      expenseData.totalCost
    );
  });
});
