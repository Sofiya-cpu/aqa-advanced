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

Cypress.Commands.add("login", (email, password) => {
  //cy.visit("https://qauto.forstudy.space/", { failOnStatusCode: false });
  cy.get("button[class='btn btn-outline-white header_signin']").click();
  cy.get("#signinEmail").type(email);
  cy.get("#signinPassword").type(password);
  cy.get('button[class="btn btn-primary"]').click();
});
