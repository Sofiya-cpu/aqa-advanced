import { test, expect } from "@playwright/test";
import LoginDetails from "./loginDetails.js";
import Registration from "./registrationPage.js";

let loginDetails;
const registration = new Registration();

test.describe("Registration form", () => {
  test.beforeAll(() => {
    loginDetails = new LoginDetails();
  });

  test.beforeEach(async ({ page }) => {
    await loginDetails.navigateToMainPageWithLogin(page);
    await registration.clickSignUp(page);
  });

  // POSITIVE CASE - successful registration
  test("Registration is successful", async ({ page }) => {
    await registration.enterCorrectRegistrationName(page, "Sofiya");
    await registration.enterCorrectRegistrationLastname(page, "Firman");
    await registration.enterCorrectEmail(page, "fix_sovka100@ukr.net");
    await registration.enterCorrectPassword(page, "Mghxyrm123!");
    await registration.enterCorrectRepeatPassword(page, "Mghxyrm123!");
    await registration.clickButtonRegister(page);

    // Clear all fields after registration to verify input reset
    await registration.clearField(
      page,
      registration.selectors.correctRegistrationName
    );
    await registration.clearField(
      page,
      registration.selectors.correctRegistrationLastname
    );
    await registration.clearField(page, registration.selectors.correctEmail);
    await registration.clearField(page, registration.selectors.correctPassword);
    await registration.clearField(
      page,
      registration.selectors.correctRepeatPassword
    );
  });

  // NEGATIVE CASES - Fields are mandatory
  test("'Name' field is mandatory", async ({ page }) => {
    await registration.focusAndBlurField(
      page,
      registration.selectors.correctRegistrationName
    );
    const error = await registration.nameError(page);
    expect(error).toBe("Name required");
    await registration.verifyRedBorder(
      page,
      registration.selectors.correctRegistrationName
    );
  });

  test("'Last name' field is mandatory", async ({ page }) => {
    await registration.focusAndBlurField(
      page,
      registration.selectors.correctRegistrationLastname
    );
    const error = await registration.lastNameError(page);
    expect(error).toBe("Last name required");
    await registration.verifyRedBorder(
      page,
      registration.selectors.correctRegistrationLastname
    );
  });

  test("'Email' field is mandatory", async ({ page }) => {
    await registration.focusAndBlurField(
      page,
      registration.selectors.correctEmail
    );
    const error = await registration.emailError(page);
    expect(error).toBe("Email required");
    await registration.verifyRedBorder(
      page,
      registration.selectors.correctEmail
    );
  });

  test("'Password' field is mandatory", async ({ page }) => {
    await registration.focusAndBlurField(
      page,
      registration.selectors.correctPassword
    );
    const error = await registration.passwordError(page);
    expect(error).toBe("Password required");
    await registration.verifyRedBorder(
      page,
      registration.selectors.correctPassword
    );
  });

  test("'Re-enter password' field is mandatory", async ({ page }) => {
    await registration.focusAndBlurField(
      page,
      registration.selectors.correctRepeatPassword
    );
    const error = await registration.repeatPasswordError(page);
    expect(error).toBe("Re-enter password required");
    await registration.verifyRedBorder(
      page,
      registration.selectors.correctRepeatPassword
    );
  });

  test("Enter one character in the 'Name' field", async ({ page }) => {
    await registration.enterCorrectRegistrationName(page, "s");
    await registration.clickOutsideRegistrationFields(page);
    const error = await registration.nameError(page);
    expect(error).toBe("Name has to be from 2 to 20 characters long");
    await registration.clearField(
      page,
      registration.selectors.correctRegistrationName
    );
  });

  test("Enter 21 characters in the 'Name' field", async ({ page }) => {
    await registration.enterCorrectRegistrationName(
      page,
      "dndndjjsjskkwkwiejdwd"
    );
    await registration.clickOutsideRegistrationFields(page);
    const error = await registration.nameError(page);
    expect(error).toBe("Name has to be from 2 to 20 characters long");
  });

  test("Invalid input to the 'Email' field", async ({ page }) => {
    await registration.enterCorrectEmail(page, "sovka100ukr.net");
    await registration.clickOutsideRegistrationFields(page);
    const error = await registration.emailError(page);
    expect(error).toBe("Email is incorrect");
    await registration.clearField(page, registration.selectors.correctEmail);
  });

  test("Enter 7 characters to the 'Password' field", async ({ page }) => {
    await registration.enterCorrectPassword(page, "1@gH567");
    await registration.clickOutsideRegistrationFields(page);
    const error = await registration.passwordError(page);
    expect(error).toBe(
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
    );
    await registration.clearField(page, registration.selectors.correctPassword);
  });

  test("Enter 16 characters to the 'Password' field", async ({ page }) => {
    await registration.enterCorrectPassword(page, "1@gH567891123456");
    await registration.clickOutsideRegistrationFields(page);
    const error = await registration.passwordError(page);
    expect(error).toBe(
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
    );
    await registration.clearField(page, registration.selectors.correctPassword);
  });

  test("Enter password with no integer", async ({ page }) => {
    await registration.enterCorrectPassword(page, "fhfhd%skJ");
    await registration.clickOutsideRegistrationFields(page);
    const error = await registration.passwordError(page);
    expect(error).toBe(
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
    );
    await registration.clearField(page, registration.selectors.correctPassword);
  });

  test("Enter password with no capital letter", async ({ page }) => {
    await registration.enterCorrectPassword(page, "hdfy67@9d");
    await registration.clickOutsideRegistrationFields(page);
    const error = await registration.passwordError(page);
    expect(error).toBe(
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
    );
    await registration.clearField(page, registration.selectors.correctPassword);
  });

  test("Enter password with no small letter", async ({ page }) => {
    await registration.enterCorrectPassword(page, "DJEJDE7484");
    await registration.clickOutsideRegistrationFields(page);
    const error = await registration.passwordError(page);
    expect(error).toBe(
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
    );
    await registration.clearField(page, registration.selectors.correctPassword);
  });

  test("Enter to 'Re-enter password' field a password that differs from 'Password'", async ({
    page,
  }) => {
    await registration.enterCorrectPassword(page, "h1THere2");
    await registration.enterCorrectRepeatPassword(page, "diFF12erent");
    await registration.clickOutsideRegistrationFields(page);
    const error = await registration.repeatPasswordError(page);
    expect(error).toBe("Passwords do not match");
  });

  test("'Register' button is disabled when at least one field is empty", async ({
    page,
  }) => {
    await registration.enterCorrectRegistrationName(page, "Sofiya");
    await registration.enterCorrectRegistrationLastname(page, "Firman");
    // Leave email empty
    await registration.enterCorrectPassword(page, "Mghxyrm123!");
    await registration.enterCorrectRepeatPassword(page, "Mghxyrm123!");

    const isDisabled = await registration.isButtonRegisterDisabled(page);
    expect(isDisabled).toBe(true);
  });
});
