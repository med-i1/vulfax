import { expect, test } from "@playwright/test";

const sections = [
  "home",
  "about",
  "capabilities",
  "process",
  "why-vulfax",
  "vision",
  "contact",
];

test("renders every section with a single h1 and no console errors", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.locator("h1")).toHaveCount(1);

  for (const id of sections) {
    await expect(page.locator(`section#${id}`)).toHaveCount(1);
  }

  await expect(page.locator("footer")).toBeVisible();
  expect(errors).toEqual([]);
});

test("anchor navigation reaches the contact section", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: "Explore capabilities" }).click();
  await expect(page).toHaveURL(/#capabilities$/);

  await page.locator('header a[href="#contact"]').first().click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(page.getByLabel("Project outline")).toBeVisible();
});

test("mobile menu opens, links navigate and escape closes it", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const menuButton = page.getByRole("button", { name: "Open navigation menu" });
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");

  await menuButton.click();
  await expect(
    page.getByRole("button", { name: "Close navigation menu" }),
  ).toHaveAttribute("aria-expanded", "true");

  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("button", { name: "Open navigation menu" }),
  ).toHaveAttribute("aria-expanded", "false");
});

test("contact form validates before reporting anything", async ({ page }) => {
  await page.goto("/#contact");

  await page.getByRole("button", { name: "Send message" }).click();
  await expect(page.getByText("Please enter your name.")).toBeVisible();
  await expect(page.getByText("Please enter a valid email address.")).toBeVisible();

  await page.getByLabel(/^Name/).fill("Ada Lovelace");
  await page.getByLabel(/^Email/).fill("ada@example.com");
  await page
    .getByLabel(/Project outline/)
    .fill("We are exploring a new platform and need a technical partner.");

  await page.getByRole("button", { name: "Send message" }).click();
  await expect(page.getByText("Validated locally")).toBeVisible();
});
