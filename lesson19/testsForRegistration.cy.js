import LoginDetails from "../lesson18/loginDetails.js";
import Registration from "./registrationPage.js";

const registration = new Registration();
let loginDetails;

describe("Registration form", () => {
  before(() => {
    loginDetails = new LoginDetails();
  });

  beforeEach(() => {
    loginDetails.navigateToMainPageWithLogin();
    registration.clickSignUp();
  });

  // POSITIVE CASE - successfulregistration

  it("Registration is successful", () => {
    registration.enterCorrectRegistrationName("Sofiya");
    registration.enterCorrectRegistrationLastname("Firman");
    registration.enterCorrectEmail("sovka100@ukr.net");
    registration.enterCorrectPassword("Mghxyrm123!");
    registration.enterCorrectRepeatPassword("Mghxyrm123!");

    registration.clickButtonRegister();

    registration.selectors.correctRegistrationName().clear();
    registration.selectors.correctRegistrationLastname().clear();
    registration.selectors.correctEmail().clear();
    registration.selectors.correctPassword().clear();
    registration.selectors.correctRepeatPassword().clear();
  });

  // NEGATIVE CASES - Fields are mandatory

  it("'Name' field is mandatory", () => {
    registration.selectors.correctRegistrationName().click();
    registration.clickOutsideRegistrationFields();
    registration.nameError().should("equal", "Name required");
    registration.verifyRedBorder(
      registration.selectors.correctRegistrationName
    );
  });

  it("'Last name' field is mandatory", () => {
    registration.selectors.correctRegistrationLastname().click();
    registration.clickOutsideRegistrationFields();
    registration.lastNameError().should("equal", "Last name required");
    registration.verifyRedBorder(
      registration.selectors.correctRegistrationLastname
    );
  });

  it("'Email' field is mandatory", () => {
    registration.selectors.correctEmail().click();
    registration.clickOutsideRegistrationFields();
    registration.emailError().should("equal", "Email required");
    registration.verifyRedBorder(registration.selectors.correctEmail);
  });

  it("'Password' field is mandatory", () => {
    registration.selectors.correctPassword().click();
    registration.clickOutsideRegistrationFields();
    registration.passwordError().should("equal", "Password required");
    registration.verifyRedBorder(registration.selectors.correctPassword);
  });

  it("'Re-enter password' field is mandatory", () => {
    registration.selectors.correctRepeatPassword().click();
    registration.clickOutsideRegistrationFields();
    registration
      .repeatPasswordError()
      .should("equal", "Re-enter password required");
    registration.verifyRedBorder(registration.selectors.correctRepeatPassword);
  });

  // NEGATIVE CASES - Invalid inputs to fields

  it("Enter one character in the 'Name' field", () => {
    registration.enterCorrectRegistrationName("s");
    registration.clickOutsideRegistrationFields();
    registration
      .nameError()
      .should("equal", "Name has to be from 2 to 20 characters long");
    registration.selectors.correctRegistrationName().clear();
  });

  it("Enter 21 character in the 'Name' field", () => {
    registration.enterCorrectRegistrationName("dndndjjsjskkwkwiejdwd");
    registration.clickOutsideRegistrationFields();
    registration
      .nameError()
      .should("equal", "Name has to be from 2 to 20 characters long");
  });

  it("Enter one character in the 'Last name' field", () => {
    registration.enterCorrectRegistrationLastname("s");
    registration.clickOutsideRegistrationFields();
    registration
      .lastNameError()
      .should("equal", "Last name has to be from 2 to 20 characters long");
    registration.selectors.correctRegistrationLastname().clear();
  });

  it("Enter 21 character in the 'Last name' field", () => {
    registration.enterCorrectRegistrationLastname("dndndjjsjskkwkwiejdwd");
    registration.clickOutsideRegistrationFields();
    registration
      .lastNameError()
      .should("equal", "Last name has to be from 2 to 20 characters long");
  });

  it("Invalid input to the 'Email' field", () => {
    registration.enterCorrectEmail("sovka100ukr.net");
    registration.clickOutsideRegistrationFields();
    registration.emailError().should("equal", "Email is incorrect");
    registration.selectors.correctEmail().clear();
  });

  it("Enter 7 characters to the 'Password' field", () => {
    registration.enterCorrectPassword("1@gH567");
    registration.clickOutsideRegistrationFields();
    registration
      .passwordError()
      .should(
        "equal",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
      );
    registration.selectors.correctPassword().clear();
  });

  it("Enter 16 characters to the 'Password' field", () => {
    registration.enterCorrectPassword("1@gH567891123456");
    registration.clickOutsideRegistrationFields();
    registration
      .passwordError()
      .should(
        "equal",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
      );
    registration.selectors.correctPassword().clear();
  });

  it("Enter password with no integer", () => {
    registration.enterCorrectPassword("fhfhd%skJ");
    registration.clickOutsideRegistrationFields();
    registration
      .passwordError()
      .should(
        "equal",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
      );
    registration.selectors.correctPassword().clear();
  });

  it("Enter password with no capital letter", () => {
    registration.enterCorrectPassword("hdfy67@9d");
    registration.clickOutsideRegistrationFields();
    registration
      .passwordError()
      .should(
        "equal",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
      );
    registration.selectors.correctPassword().clear();
  });

  it("Enter password with no small letter", () => {
    registration.enterCorrectPassword("DJEJDE7484");
    registration.clickOutsideRegistrationFields();
    registration
      .passwordError()
      .should(
        "equal",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
      );
    registration.selectors.correctPassword().clear();
  });

  it("Enter to 'Re-enter password' field a passsword that differs from 'Password", () => {
    registration.enterCorrectPassword("h1THere2");
    registration.enterCorrectRepeatPassword("diFF12erent");
    registration.clickOutsideRegistrationFields();
    registration
      .repeatPasswordError()
      .should("equal", "Passwords do not match");
  });

  it("'Reister' button is disabled when at lest one field is empty", () => {
    registration.enterCorrectRegistrationName("Sofiya");
    registration.enterCorrectRegistrationLastname("Firman");
    //registration.enterCorrectEmail("");
    registration.enterCorrectPassword("Mghxyrm123!");
    registration.enterCorrectRepeatPassword("Mghxyrm123!");

    registration.buttonRegisterDisabled().should("be.disabled");
  });
});
