const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    browser: "firefox",
    specPattern: "tests/**/*.cy.js",
  },
  screenshotsFolder: "cypress/screenshots",
  screenshotOnRunFailure: true,
});
