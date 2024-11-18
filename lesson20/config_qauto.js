import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    baseUrl: "https://qauto.forstudy.space",
    env: {
      userEmail: "sovka100@ukr.net",
      userPassword: "Mghxyrm123",
    },
    setupNodeEvents(on, config) {},
  },
});
