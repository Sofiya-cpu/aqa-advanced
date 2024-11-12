class Registration {
  selectors = {
    correctRegistrationName: () => cy.get("input#signupName"),
    correctRegistrationLastname: () => cy.get("input#signupLastName"),
    correctEmail: () => cy.get("input#signupEmail"),
    correctPassword: () => cy.get("input#signupPassword"),
    correctRepeatPassword: () => cy.get("input#signupRepeatPassword"),
  };

  //   correctRegistrationName() {
  //     return cy.get("input#signupName");
  //   }

  verifyRedBorder(selector) {
    selector().should("have.css", "border-color", "rgb(220, 53, 69)");
  }

  //   verifyRegex(regex) {
  //     regex().should("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$");
  //   }

  nameError() {
    return cy
      .get("input[name='name'] + [class='invalid-feedback'] p")
      .invoke("text");
  }

  lastNameError() {
    return cy
      .get("input[name='lastName'] + [class='invalid-feedback'] p")
      .invoke("text");
  }

  emailError() {
    return cy
      .get("input[name='email'] + [class='invalid-feedback'] p")
      .invoke("text");
  }

  passwordError() {
    return cy
      .get("input[name='password'] + [class='invalid-feedback'] p")
      .invoke("text");
  }

  repeatPasswordError() {
    return cy
      .get("input[name='repeatPassword'] + [class='invalid-feedback'] p")
      .invoke("text");
  }

  enterCorrectRegistrationName(correctRegistrationName) {
    this.selectors.correctRegistrationName().type(correctRegistrationName);
  }

  //   enterIncorrectregistrationName(incorrectregistrationName) {
  //     this.incorrectregistrationName().type(incorrectregistrationName);
  //   }

  enterCorrectRegistrationLastname(correctRegistrationLastname) {
    this.selectors
      .correctRegistrationLastname()
      .type(correctRegistrationLastname);
  }

  //   enterIncorrectRegistrationLastname(incorrectRegistrationLastname) {
  //     this.incorrectRegistrationLastname().type(incorrectRegistrationLastname);
  //   }

  enterCorrectEmail(correctEmail) {
    this.selectors.correctEmail().type(correctEmail);
  }

  //   enterIncorrectEmail(incorrectEmail) {
  //     this.incorrectEmail().type(incorrectEmail);
  //   }

  enterCorrectPassword(correctPassword) {
    this.selectors.correctPassword().type(correctPassword, { sensitive: true });
  }

  //   enterIncorrectPassword(incorrectPassword) {
  //     this.incorrectPassword().type(incorrectPassword, { sensitive: true });
  //   }

  enterCorrectRepeatPassword(correctRepeatPassword) {
    this.selectors.correctRepeatPassword().type(correctRepeatPassword, {
      sensitive: true,
    });
  }

  //   enterIncorrectRepeatPassword(incorrectRepeatPassword) {
  //     this.incorrectRepeatPassword().type(incorrectRepeatPassword, {
  //       sensitive: true,
  //     });
  //   }

  clickSignUp() {
    return cy
      .get("button[class='hero-descriptor_btn btn btn-primary']")
      .click();
  }

  clickButtonRegister() {
    return cy.get("button[class='btn btn-primary']").click();
  }

  buttonRegisterDisabled() {
    return cy.get("button[class='btn btn-primary'][disabled]");
  }

  clickOutsideRegistrationFields() {
    return cy.get("div[class='modal-header']").click();
  }
}

export default Registration;
