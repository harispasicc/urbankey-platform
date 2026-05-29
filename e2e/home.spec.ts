import { expect, test } from "@playwright/test";

test.describe("Home page", () => {
  test("loads with hero, sections, and footer", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      /We manage your apartment|Mi upravljamo Vašim apartmanom/,
    );

    for (const id of [
      "services",
      "how-it-works",
      "why-urban-key",
      "faq",
      "contact",
    ]) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }

    await expect(page.locator("footer")).toBeVisible();
  });

  test("navigates to services from hero CTA", async ({ page }) => {
    await page.goto("/");

    const servicesLink = page.getByRole("link", {
      name: /explore services|pogledajte usluge/i,
    });
    await servicesLink.click();

    await expect(page).toHaveURL(/#services$/);
    await expect(page.locator("#services")).toBeInViewport();
  });
});
