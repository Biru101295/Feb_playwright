import {test, expect} from '@playwright/test';
test.describe("Flipkart", () => {

    test.beforeEach(async ({page}) => {
        await page.goto("https://www.flipkart.com/");
        await page.waitForLoadState("load");
        await expect(page).toHaveTitle("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");
    });
    test("Validate login button", async ({page}) => {
        await expect(await page.getByRole("link", {name: "Login"}).first()).toBeVisible();
        await page.getByRole("link", {name: "Login"}).first().hover();
        await page.waitForTimeout(2000);
        await page.getByRole("link", {name: "Grocery"}).hover();
        await page.waitForTimeout(2000);
        await expect(await page.getByRole("link", {name: "Grocery"})).toHaveText("Grocery");
        await page.getByRole("link", {name: "Grocery"}).click();
        await page.waitForLoadState("load");
        await expect(page.getByText("Verify Delivery Pincode")).toBeVisible();
        await page.getByText("CANCEL, GO BACK").click();
        await page.waitForLoadState("load");
        await page.getByRole("link", {name: "Grocery"}).click();
        await page.waitForLoadState("load");
        await page.getByText("CONTINUE").click();
        await page.waitForLoadState("load");
        await expect(page.getByText("Please enter a valid pin code.")).toBeVisible();
        await page.getByPlaceholder("Enter Pincode Here").fill("560001");
    });
});