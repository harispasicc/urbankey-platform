import { expect, test } from "@playwright/test";

test.describe("Language switcher", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() => localStorage.removeItem("urbankey-locale"));
    await page.reload();
  });

  test("switches landing copy between English and Bosnian", async ({ page }) => {
    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toContainText("We manage your apartment");

    await page.getByTestId("language-switcher-trigger").click();
    await expect(page.getByTestId("language-switcher-menu")).toBeVisible();
    await page.getByTestId("language-option-bs").click();

    await expect(heading).toContainText("Mi upravljamo Vašim apartmanom");
    await expect(
      page.getByRole("link", { name: /zakažite konsultaciju/i }),
    ).toBeVisible();

    await page.getByTestId("language-switcher-trigger").click();
    await expect(page.getByTestId("language-switcher-menu")).toBeVisible();
    await page.getByTestId("language-option-en").click();

    await expect(heading).toContainText("We manage your apartment");
  });

  test("restores Bosnian after reload", async ({ page }) => {
    await page.getByTestId("language-switcher-trigger").click();
    await expect(page.getByTestId("language-switcher-menu")).toBeVisible();
    await page.getByTestId("language-option-bs").click();

    await page.reload();

    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Mi upravljamo Vašim apartmanom",
    );
  });
});
