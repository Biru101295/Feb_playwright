import {test, expect} from '@playwright/test';
test.describe("Hyr Tutorial", () => {

    test("Varify basic control", async({page})=>{
        await page.goto("https://www.hyrtutorials.com/p/basic-controls.html");
        await page.waitForLoadState("load");
        await expect(page).toHaveTitle("Basic Controls - H Y R Tutorials");
        await page.getByPlaceholder("Enter First Name").press("CapsLock");
        await page.getByPlaceholder("Enter First Nae").pressSequentially("Birendra", {delay: 1000});
        await page.waitForLoadState("load");
       // await page.pause();
        await page.locator('[id="chinesechbx"]').scrollIntoViewIfNeeded();
       // await page.$eval("[id='chinesechbx']", (el) => el.scrollIntoView());
       // await page.locator('[id="chinesechbx"]').check();
        await page.waitForTimeout(2000);
    });
});