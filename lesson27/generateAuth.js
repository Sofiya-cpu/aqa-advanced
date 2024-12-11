import { chromium } from "@playwright/test";
import path from "path";

const authFile = path.resolve(process.cwd(), "auth.json");

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // HTTP Basic Auth
  const auth = Buffer.from("guest:welcome2qauto").toString("base64");
  await page.setExtraHTTPHeaders({
    Authorization: `Basic ${auth}`,
  });

  await page.goto("https://qauto.forstudy.space");

  await page.click('button[class="btn btn-outline-white header_signin"]');
  await page.fill("#signinEmail", "sovka@ukr.net");
  await page.fill("#signinPassword", "Mghxyrm123");
  await page.click('button[class="btn btn-primary"]');

  await page.waitForURL("https://qauto.forstudy.space/panel/garage");

  // !! storage state
  await context.storageState({ path: authFile });

  await browser.close();
  console.log("Auth state saved to auth.json");
})();
