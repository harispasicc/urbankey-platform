import { expect, test } from "@playwright/test";

test.describe("Contact form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#contact");
    await page.locator("#contact-form").scrollIntoViewIfNeeded();
  });

  test("shows validation errors when submitted empty", async ({ page }) => {
    const submit = page.getByTestId("contact-form-submit");
    await submit.scrollIntoViewIfNeeded();
    await submit.click();

    await expect(page.getByRole("alert").first()).toBeVisible();
    await expect(page.locator("#contact-name-error")).toHaveText(
      /Please enter your full name|Unesite ime i prezime/i,
    );
  });

  test("expands an FAQ item", async ({ page }) => {
    await page.goto("/#faq");

    const secondQuestion = page.locator("#faq").getByRole("button").nth(1);
    await secondQuestion.click();
    await expect(secondQuestion).toHaveAttribute("aria-expanded", "true");
  });
});
