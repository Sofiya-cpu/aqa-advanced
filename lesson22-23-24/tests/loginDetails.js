class LoginDetails {
  defaultCredentials = {
    username: "guest",
    password: "welcome2qauto",
  };

  async navigateToMainPageWithLogin(page) {
    const auth = Buffer.from(
      `${this.defaultCredentials.username}:${this.defaultCredentials.password}`
    ).toString("base64");

    await page.setExtraHTTPHeaders({
      Authorization: `Basic ${auth}`,
    });

    await page.goto("https://qauto.forstudy.space/", {
      waitUntil: "load",
      timeout: 60000,
    });
    await page.waitForLoadState("networkidle");
  }
}

export default LoginDetails;
