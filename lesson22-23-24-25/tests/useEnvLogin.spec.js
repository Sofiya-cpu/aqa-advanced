import dotenv from "dotenv";
import { defineConfig, test, expect } from "@playwright/test";
import Registration from "./registrationPage.js";

export default defineConfig({
  use: {
    baseURL: process.env.BASE_URL,
    httpCredentials: {
      username: process.env.HTTP_USER,
      password: process.env.HTTP_PASSWORD,
    },
  },
});

test.describe("Registration form", () => {
  test("'Name' field is mandatory", async ({ page }) => {
    console.log(`Base URL: ${process.env.BASE_URL}`);
    await page.goto(process.env.BASE_URL);

    const registration = new Registration(page);

    await registration.clickSignUp();
    await registration.focusAndBlurField(registration.selectors.name);
    const error = await registration.getError(registration.selectors.name);
    expect(error).toBe("Name required");
    await registration.verifyRedBorder(registration.selectors.name);
    const isDisabled = await registration.isButtonRegisterDisabled();
    expect(isDisabled).toBe(true);
  });
});
