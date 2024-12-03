import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  testDir: "./tests",
  testMatch: ["*.spec.js"],
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    headless: false,
    trace: "on-first-retry",
    baseURL: process.env.BASE_URL,
    httpCredentials: {
      username: process.env.HTTP_USER,
      password: process.env.HTTP_PASSWORD,
    },
  },
  projects: [
    {
      name: "Chromium",
      use: { browserName: "chromium" },
    },
    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },
    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },
  ],
});
