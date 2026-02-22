import { test, expect } from "@playwright/test";

test("Lunch Google browser", async({page})=>{
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
});

test.only("verify sign in button is visible", async({page})=>{
    await page.goto("https://www.google.com/");
    await page.waitForLoadState("domcontentloaded");
    //await page.pause();
    await expect(page.getByRole("link", { name: "Sign in" })).toBeVisible();
    expect(await page.getByRole("link", { name: "Sign in" }).innerText()).toContain("Sign in");
    await page.getByRole("link", { name: "Sign in" }).hover();
    // await page.locator("[id='APjFqb']").fill("Biru");
    // await page.waitForTimeout(2000);
    await page.getByRole("button", { name: "Upload files or images" }).click();
    await page.waitForTimeout(2000);
});