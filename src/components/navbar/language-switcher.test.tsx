import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { LanguageProvider } from "@/i18n/language-context";
import { LanguageSwitcher } from "./language-switcher";

function renderSwitcher() {
  return render(
    <LanguageProvider>
      <LanguageSwitcher />
    </LanguageProvider>,
  );
}

describe("LanguageSwitcher", () => {
  it("opens the language menu and switches to Bosnian", async () => {
    const user = userEvent.setup();
    renderSwitcher();

    await user.click(screen.getByRole("button", { name: /language/i }));

    await user.click(screen.getByRole("option", { name: /bosanski/i }));

    expect(document.documentElement.lang).toBe("bs");

    await user.click(screen.getByRole("button", { name: /jezik|language/i }));
    expect(screen.getByRole("option", { name: /bosanski/i })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  it("persists locale in localStorage", async () => {
    const user = userEvent.setup();
    localStorage.clear();
    renderSwitcher();

    await user.click(screen.getByRole("button", { name: /language/i }));
    await user.click(screen.getByRole("option", { name: /bosanski/i }));

    expect(localStorage.getItem("urbankey-locale")).toBe("bs");
  });
});
