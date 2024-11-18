class annoyingLogin2 {
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

class Qautologin2 {
  baseUrl = "https://qauto2.forstudy.space/";

  user = {
    email: "sovka100_1@ukr.net",
    password: "Mghxyrm123",
  };
}

export { annoyingLogin2, Qautologin2 };
