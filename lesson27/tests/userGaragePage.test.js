import test from "../fixtures.js";
import { expect } from "@playwright/test";

test("User should see the Garage page", async ({ userGaragePage }) => {
  await expect(userGaragePage).toHaveURL(
    "https://qauto.forstudy.space/panel/garage"
  );
});
