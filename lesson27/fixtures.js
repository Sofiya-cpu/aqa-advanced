import { test as base } from "@playwright/test";
import path from "path";

const authFile = path.resolve(process.cwd(), "auth.json");

const test = base.extend({
  userGaragePage: async ({ browser }, use) => {
    const context = await browser.newContext({
      storageState: authFile,
    });
    const page = await context.newPage();
    await page.goto("https://qauto.forstudy.space/panel/garage");
    await use(page);
    await context.close();
  },
});

export default test;
