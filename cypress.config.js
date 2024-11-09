import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Add the `specPattern` to specify where Cypress should look for test files
    specPattern: "lesson17/**/*.cy.{js,jsx,ts,tsx}",
  },
});
