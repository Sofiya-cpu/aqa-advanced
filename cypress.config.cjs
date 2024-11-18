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
      addMatchImageSnapshotPlugin(on);

      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });

      const configFile = config.env.configFile || "prod";
      const configJson = getConfigurationByFile(configFile);
      console.log("Loaded configuration:", configJson);

      return { ...config, ...configJson };
    },
  },
};
