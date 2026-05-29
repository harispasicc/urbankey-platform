import { expect, test } from "@playwright/test";

test.describe("Contact form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#contact");
    await expect(page.locator("#contact-form")).toBeVisible();
  });

  test("shows validation errors when submitted empty", async ({ page }) => {
    await page.locator("#contact-form").evaluate((form) => {
      form.requestSubmit();
    });

    await expect(page.locator("#contact-name-error")).toBeVisible();
    await expect(page.locator("#contact-name-error")).toHaveText(
      /Please enter your full name|Unesite ime i prezime/i,
    );
  });

  test("expands an FAQ item", async ({ page }) => {
    await page.goto("/#faq");
    await expect(page.locator("#faq")).toBeVisible();

    const secondQuestion = page.getByRole("button", {
      name: /Do I keep control of my Airbnb account|Da li zadržavam kontrolu nad Airbnb nalogom/i,
    });
    await secondQuestion.scrollIntoViewIfNeeded();
    await secondQuestion.click();
    await expect(secondQuestion).toHaveAttribute("aria-expanded", "true");
  });
});
