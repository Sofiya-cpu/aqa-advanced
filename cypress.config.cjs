const {
  addMatchImageSnapshotPlugin,
} = require("@simonsmith/cypress-image-snapshot/plugin");
const fs = require("fs-extra");
const path = require("path");

// Function to get configuration based on the environment
function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(
    __dirname,
    "cypress",
    "config",
    `${file}.json`
  );
  return fs.readJsonSync(pathToConfigFile);
}

module.exports = {
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true,
  },
  retries: {
    runMode: 0,
    openMode: 0,
  },
  screenshotsFolder: "cypress/screenshots",
  video: true,
  viewportWidth: 1400,
  viewportHeight: 900,
  chromeWebSecurity: false,

  e2e: {
    specPattern: "lesson20/**/*.{js,jsx,ts,tsx,cy.js}",
    setupNodeEvents(on, config) {
      // Add image snapshot plugin
      addMatchImageSnapshotPlugin(on);

      // Log task for debugging purposes
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });

      // Get the config file from the environment variable, default to 'dev' if not set
      const configFile = config.env.configFile || "dev"; // 'dev' as default environment

      // Load the configuration from the corresponding file
      const configJson = getConfigurationByFile(configFile);
      console.log("Loaded configuration:", configJson);

      // Merge the configuration with the existing Cypress config
      return { ...config, ...configJson };
    },
  },
};
