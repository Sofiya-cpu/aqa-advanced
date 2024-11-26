class Registration {
  selectors = {
    correctRegistrationName: "input#signupName",
    correctRegistrationLastname: "input#signupLastName",
    correctEmail: "input#signupEmail",
    correctPassword: "input#signupPassword",
    correctRepeatPassword: "input#signupRepeatPassword",
  };

  // Red border
  async verifyRedBorder(page, selector) {
    const element = await page.locator(selector);
    const borderColor = await element.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return style.borderColor;
    });
  }

  // Fetch error message for 'Name' field
  async nameError(page) {
    const error = await page.locator(
      "input[name='name'] + .invalid-feedback p"
    );
    return await error.innerText();
  }

  // Fetch error message for 'Last Name' field
  async lastNameError(page) {
    const error = await page.locator(
      "input[name='lastName'] + .invalid-feedback p"
    );
    return await error.innerText();
  }

  // Fetch error message for 'Email' field
  async emailError(page) {
    const error = await page.locator(
      "input[name='email'] + .invalid-feedback p"
    );
    return await error.innerText();
  }

  // Fetch error message for 'Password' field
  async passwordError(page) {
    const error = await page.locator(
      "input[name='password'] + .invalid-feedback p"
    );
    return await error.innerText();
  }

  // Fetch error message for 'Repeat Password' field
  async repeatPasswordError(page) {
    const error = await page.locator(
      "input[name='repeatPassword'] + .invalid-feedback p"
    );
    return await error.innerText();
  }

  async enterCorrectRegistrationName(page, name) {
    await page.locator(this.selectors.correctRegistrationName).type(name);
  }

  async enterCorrectRegistrationLastname(page, lastName) {
    await page
      .locator(this.selectors.correctRegistrationLastname)
      .type(lastName);
  }

  async enterCorrectEmail(page, email) {
    await page.locator(this.selectors.correctEmail).type(email);
  }

  async enterCorrectPassword(page, password) {
    await page
      .locator(this.selectors.correctPassword)
      .type(password, { sensitive: true });
  }

  async enterCorrectRepeatPassword(page, repeatPassword) {
    await page
      .locator(this.selectors.correctRepeatPassword)
      .type(repeatPassword, { sensitive: true });
  }

  async clickSignUp(page) {
    await page.locator("button.hero-descriptor_btn.btn.btn-primary").click();
  }

  async clickButtonRegister(page) {
    await page.locator("button[class='btn btn-primary']").click();
  }

  async buttonRegisterDisabled(page) {
    const button = await page.locator("button.btn.btn-primary[disabled]");
    return await button.isVisible();
  }

  // Click outside the registration fields to trigger validation
  async clickOutsideRegistrationFields(page) {
    await page.locator("div.modal-header").click();
  }

  async clearField(page, selector) {
    await page.locator(selector).fill("");
  }

  // Clear all registration fields
  async clearAllFields(page) {
    await this.clearField(page, this.selectors.correctRegistrationName);
    await this.clearField(page, this.selectors.correctRegistrationLastname);
    await this.clearField(page, this.selectors.correctEmail);
    await this.clearField(page, this.selectors.correctPassword);
    await this.clearField(page, this.selectors.correctRepeatPassword);
  }

  // Focus and blur on the field to trigger validation
  async focusAndBlurField(page, selector) {
    await page.locator(selector).focus();
    await page.locator(selector).blur();
  }

  // Check if the "Register" button is disabled
  async isButtonRegisterDisabled(page) {
    const button = await page.locator("button.btn.btn-primary[disabled]"); // Specific to disabled button
    return await button.isVisible();
  }
}

export default Registration;
