class LoginDetails {
  defaultCredentials = {
    username: "guest",
    password: "welcome2qauto",
  };

  async navigateToMainPageWithLogin(page) {
    // Authorization header for Basic Authentication
    const auth = Buffer.from(
      `${this.defaultCredentials.username}:${this.defaultCredentials.password}`
    ).toString("base64");

    await page.setExtraHTTPHeaders({
      Authorization: `Basic ${auth}`,
    });

    await page.goto("https://qauto.forstudy.space/");
  }
}

export default LoginDetails;
