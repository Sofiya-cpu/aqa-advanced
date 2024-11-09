const LoginDetails = {
  username: "guest",
  password: "welcome2qauto",
};

describe("Login details", () => {
  it("Homework navigation", () => {
    cy.visit("https://qauto.forstudy.space/", {
      auth: {
        username: LoginDetails.username,
        password: LoginDetails.password,
      },
    });
    cy.log("test");
  });
});

export default LoginDetails;
