// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.overwrite("type", (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    // Disable original Cypress log
    options.log = false;

    // Create a custom log with masked message
    Cypress.log({
      $el: element,
      name: "type",
      message: "*".repeat(text.length), // Mask the password
    });
  }

  // Ensure the original type function is called
  return originalFn(element, text, options);
});

Cypress.Commands.add(
  "createExpense",
  (carId, reportedAt, mileage, liters, totalCost, forceMileage, sidToken) => {
    cy.request({
      method: "POST",
      url: "/api/expenses",
      headers: {
        Cookie: `sid=${sidToken}`,
      },
      body: {
        carId: carId,
        reportedAt: reportedAt,
        mileage: mileage,
        liters: liters,
        totalCost: totalCost,
        forceMileage: forceMileage,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.carId).to.equal(carId);
      expect(response.body.mileage).to.equal(mileage);
      expect(response.body.liters).to.equal(liters);
      expect(response.body.totalCost).to.equal(totalCost);
      expect(response.body.forceMileage).to.equal(forceMileage);
    });
  }
);
