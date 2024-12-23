import { test, expect } from "@playwright/test";
import LoginDetails from "./loginDetails.js";
import Registration from "./registrationPage.js";

let loginDetails;

test.describe("Registration form", () => {
  test.beforeAll(() => {
    loginDetails = new LoginDetails();
  });

  test.beforeEach(async ({ page }) => {
    loginDetails = new LoginDetails();
    await loginDetails.navigateToMainPageWithLogin(page);
    const registration = new Registration(page);
    await registration.clickSignUp();
  });

  //   //  POSITIVE CASE - successful registration
  //   test("Registration is successful", async ({ page }) => {
  //     const registration = new Registration(page);
  //     await registration.enterCorrectRegistrationName("Sofiya");
  //     await registration.enterCorrectRegistrationLastname("Firman");
  //     await registration.enterCorrectEmail("fix_sovka100@ukr.net");
  //     await registration.enterCorrectPassword("Mghxyrm123!");
  //     await registration.enterCorrectRepeatPassword("Mghxyrm123!");
  //     await registration.clickButtonRegister();

  //     // Verify success message
  //     //const successMessage = await page.locator(".alert-success").innerText();
  //     //expect(successMessage).toContain("Registration successful");

  //     // Clear fields to verify form reset
  //     await registration.clearAllFields();

  //     // Перевірка, чи всі поля очищені
  //     const nameField = await page
  //       .locator(registration.selectors.name)
  //       .inputValue();
  //     const lastnameField = await page
  //       .locator(registration.selectors.lastname)
  //       .inputValue();
  //     const emailField = await page
  //       .locator(registration.selectors.email)
  //       .inputValue();
  //     const passwordField = await page
  //       .locator(registration.selectors.password)
  //       .inputValue();
  //     const repeatPasswordField = await page
  //       .locator(registration.selectors.repeatPassword)
  //       .inputValue();

  //     expect(nameField).toBe("");
  //     expect(lastnameField).toBe("");
  //     expect(emailField).toBe("");
  //     expect(passwordField).toBe("");
  //     expect(repeatPasswordField).toBe("");
  //   });
  // });

  // NEGATIVE CASES - Fields are mandatory
  test("'Name' field is mandatory", async ({ page }) => {
    const registration = new Registration(page);
    await registration.focusAndBlurField(registration.selectors.name);
    const error = await registration.getError(registration.selectors.name);
    expect(error).toBe("Name required");
    await registration.verifyRedBorder(registration.selectors.name);
    const isDisabled = await registration.isButtonRegisterDisabled();
    expect(isDisabled).toBe(true);
  });

  test("'Last name' field is mandatory", async ({ page }) => {
    const registration = new Registration(page);
    await registration.focusAndBlurField(registration.selectors.lastname);
    const error = await registration.getError(registration.selectors.lastname);
    expect(error).toBe("Last name required");
    await registration.verifyRedBorder(registration.selectors.lastname);
    const isDisabled = await registration.isButtonRegisterDisabled();
    expect(isDisabled).toBe(true);
  });

  test("'Email' field is mandatory", async ({ page }) => {
    const registration = new Registration(page);
    await registration.focusAndBlurField(registration.selectors.email);
    const error = await registration.emailError(registration.selectors.email);
    expect(error).toBe("Email required");
    await registration.verifyRedBorder(registration.selectors.email);
  });

  test("'Password' field is mandatory", async ({ page }) => {
    const registration = new Registration(page);
    await registration.focusAndBlurField(registration.selectors.password);
    const error = await registration.getError(registration.selectors.password);
    expect(error).toBe("Password required");
    await registration.verifyRedBorder(registration.selectors.password);
    const isDisabled = await registration.isButtonRegisterDisabled();
    expect(isDisabled).toBe(true);
  });

  test("'Re-enter password' field is mandatory", async ({ page }) => {
    const registration = new Registration(page);
    await registration.focusAndBlurField(registration.selectors.repeatPassword);
    const error = await registration.getError(
      registration.selectors.repeatPassword
    );
    expect(error).toBe("Re-enter password required");
    await registration.verifyRedBorder(registration.selectors.repeatPassword);
  });

  test("Enter one character in the 'Name' field", async ({ page }) => {
    const registration = new Registration(page);
    await registration.enterCorrectRegistrationName("S");
    await registration.clickOutsideRegistrationFields();
    const error = await registration.getError(registration.selectors.name);
    expect(error).toBe("Name has to be from 2 to 20 characters long");
    await registration.clearField(registration.selectors.name);
  });

  test("Enter 21 characters in the 'Name' field", async ({ page }) => {
    const registration = new Registration(page);
    await registration.enterCorrectRegistrationName("A".repeat(21));
    await registration.clickOutsideRegistrationFields();
    const error = await registration.getError(registration.selectors.name);
    expect(error).toBe("Name has to be from 2 to 20 characters long");
    await registration.clearField(registration.selectors.name);
  });

  test("Invalid input to the 'Email' field", async ({ page }) => {
    const registration = new Registration(page);
    await registration.enterCorrectEmail("sovka100ukr.net");
    //await registration.clickOutsideRegistrationFields();
    const emailField = registration.page.locator(registration.selectors.email);
    await emailField.focus();
    await emailField.blur();
    const error = await registration.emailError(registration.selectors.email);
    expect(error).toBe("Email is incorrect");
    await registration.clearField(registration.selectors.email);
  });

  test("Enter 7 characters to the 'Password' field", async ({ page }) => {
    const registration = new Registration(page);
    await registration.enterCorrectPassword("Abc12!");
    await registration.clickOutsideRegistrationFields();
    const error = await registration.getError(registration.selectors.password);
    expect(error).toBe(
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
    );
    await registration.clearField(registration.selectors.password);
  });

  test("Enter 16 characters to the 'Password' field", async ({ page }) => {
    const registration = new Registration(page);
    await registration.enterCorrectPassword("Abc1234567890123!");
    await registration.clickOutsideRegistrationFields();
    const error = await registration.getError(registration.selectors.password);
    expect(error).toBe(
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
    );
    await registration.clearField(registration.selectors.password);
  });

  test("Enter password with no integer", async ({ page }) => {
    const registration = new Registration(page);
    await registration.enterCorrectPassword("AbcdEfGh!");
    await registration.clickOutsideRegistrationFields();
    const error = await registration.getError(registration.selectors.password);
    expect(error).toBe(
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
    );
    await registration.clearField(registration.selectors.password);
  });

  test("Enter password with no capital letter", async ({ page }) => {
    const registration = new Registration(page);
    await registration.enterCorrectPassword("abcd1234!");
    await registration.clickOutsideRegistrationFields();
    const error = await registration.getError(registration.selectors.password);
    expect(error).toBe(
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
    );
    await registration.clearField(registration.selectors.password);
  });

  test("Enter password with no small letter", async ({ page }) => {
    const registration = new Registration(page);
    await registration.enterCorrectPassword("ABCD1234!");
    await registration.clickOutsideRegistrationFields();
    const error = await registration.getError(registration.selectors.password);
    expect(error).toBe(
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
    );
    await registration.clearField(registration.selectors.password);
  });

  test("Enter to 'Re-enter password' field a password that differs from 'Password'", async ({
    page,
  }) => {
    const registration = new Registration(page);
    await registration.enterCorrectPassword("Password1!");
    await registration.enterCorrectRepeatPassword("Different1!");
    await registration.clickOutsideRegistrationFields();
    const error = await registration.getError(
      registration.selectors.repeatPassword
    );
    expect(error).toBe("Passwords do not match");
    await registration.clearField(registration.selectors.repeatPassword);
  });

  test("'Register' button is disabled when at least one field is empty", async ({
    page,
  }) => {
    const registration = new Registration(page);
    await registration.enterCorrectRegistrationName("Sofiya");
    await registration.enterCorrectRegistrationLastname("Firman");
    // Leave email field empty
    await registration.enterCorrectPassword("Mghxyrm123!");
    await registration.enterCorrectRepeatPassword("Mghxyrm123!");

    const isDisabled = await registration.isButtonRegisterDisabled();
    expect(isDisabled).toBe(true);
  });
});
