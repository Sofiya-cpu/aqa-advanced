import { defineConfig } from "cypress";
import { addMatchImageSnapshotPlugin } from "@simonsmith/cypress-image-snapshot/plugin.js";
import fs from "fs-extra";
import path from "path";

// Функція для отримання конфігурації на основі файлу
function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve("cypress", "config", `${file}.json`);
  return fs.readJsonSync(pathToConfigFile);
}

export default defineConfig({
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

  // Важливо: Переконайтесь, що блок e2e присутній і правильно налаштований
  e2e: {
    specPattern: "lesson20/**/*.{js,jsx,ts,tsx,cy.js}", // Патерн для тестів, включає .cy.js
    setupNodeEvents(on, config) {
      // Додаємо плагін для знімків
      addMatchImageSnapshotPlugin(on);

      // Завдання для логування в консоль
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });

      // Динамічне завантаження конфігураційного файлу
      const configFile = config.env.configFile || "dev"; // Оновлення залежно від env
      const configJson = getConfigurationByFile(configFile);
      console.log("Loaded configuration:", configJson);

      // Об'єднуємо конфігурацію
      return { ...config, ...configJson };
    },
  },
});
