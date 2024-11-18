import { defineConfig } from "cypress";

const credentials = {
  email: "sovka100@ukr.net",
  password: "Mghxyrm123",
};

class AnnoyingLogin {
  defaultCredentials = {
    username: "guest",
    password: "welcome2qauto",
  };

  navigateToMainPageWithLogin() {
    cy.visit("https://qauto.forstudy.space/", {
      auth: this.defaultCredentials,
    });
  }
}

class Qautologin {
  baseUrl = "https://qauto.forstudy.space/";

  login() {
    cy.visit(this.baseUrl);
    cy.get("input[name='email']").type(credentials.email);
    cy.get("input[name='password']").type(credentials.password);
    cy.get("button[type='submit']").click();
  }
}

export default defineConfig({
  e2e: {
    specPattern: "lesson20/tests.cy.js",
    setupNodeEvents(on, config) {},
    baseUrl: "https://qauto.forstudy.space/",
    env: credentials,
  },
});

export { AnnoyingLogin, Qautologin, credentials };
