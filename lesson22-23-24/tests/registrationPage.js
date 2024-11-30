import { expect } from "@playwright/test";
class Registration {
  constructor(page) {
    this.page = page;
    this.selectors = {
      name: "input#signupName",
      lastname: "input#signupLastName",
      email: "input#signupEmail",
      password: "input#signupPassword",
      repeatPassword: "input#signupRepeatPassword",
    };
  }

  async focusAndBlurField(selector) {
    const field = this.page.locator(selector);
    await field.focus();
    await field.blur();
  }

  async getError(selector) {
    const error = await this.page.locator(`${selector} + .invalid-feedback p`);
    return error.textContent();
  }

  async emailError(page) {
    const error = await this.page.locator(
      "input[name='email'] + .invalid-feedback p"
    );
    return error.textContent();
  }

  async enterCorrectRegistrationName(name) {
    await this.page.locator(this.selectors.name).type(name);
  }

  async enterCorrectRegistrationLastname(lastName) {
    await this.page.locator(this.selectors.lastname).type(lastName);
  }

  async enterCorrectEmail(email) {
    await this.page.locator(this.selectors.email).type(email);
  }

  async enterCorrectPassword(password) {
    await this.page
      .locator(this.selectors.password)
      .type(password, { sensitive: true });
  }

  async enterCorrectRepeatPassword(repeatPassword) {
    await this.page
      .locator(this.selectors.repeatPassword)
      .type(repeatPassword, { sensitive: true });
  }

  async clickSignUp() {
    await this.page
      .locator("button.hero-descriptor_btn.btn.btn-primary")
      .click();
  }

  async clickButtonRegister() {
    await this.page.locator("button[class='btn btn-primary']").click();
  }

  async isButtonRegisterDisabled() {
    return this.page.locator("button.btn.btn-primary[disabled]").isVisible();
  }

  async clearField(selector) {
    await this.page.locator(selector).clear();
  }
  async clearAllFields() {
    await this.clearField(this.selectors.name);
    await this.clearField(this.selectors.lastname);
    await this.clearField(this.selectors.email);
    await this.clearField(this.selectors.password);
    await this.clearField(this.selectors.repeatPassword);
  }

  async verifyRedBorder(selector) {
    const element = this.page.locator(selector);
    await expect(element).toHaveCSS("border-color", "rgb(220, 53, 69)");
  }

  async clickOutsideRegistrationFields() {
    await this.page.locator(".modal-header").click();
  }
}

export default Registration;
