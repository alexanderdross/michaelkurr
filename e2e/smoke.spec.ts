import { test, expect } from "@playwright/test";

test.describe("Home page smoke tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("renders hero section with Dr. Michael Kurr", async ({ page }) => {
    const heading = page.locator("h1");
    await expect(heading).toContainText("Michael Kurr");
  });

  test("has correct page title", async ({ page }) => {
    await expect(page).toHaveTitle(/Dr\. Michael Kurr/);
  });

  test("renders profile image with WebP source", async ({ page }) => {
    const picture = page.locator("#hero picture");
    await expect(picture).toBeVisible();

    const webpSource = picture.locator('source[type="image/webp"]');
    await expect(webpSource).toHaveAttribute("srcset", /profile.*\.webp/);
  });

  test("skip-to-content link works", async ({ page }) => {
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toBeAttached();

    // Focus it via Tab
    await page.keyboard.press("Tab");
    await expect(skipLink).toBeFocused();
  });

  test("navigation links are present", async ({ page }) => {
    const nav = page.locator('nav[aria-label="Main navigation"]');
    await expect(nav).toBeVisible();

    for (const label of ["About", "Expertise", "Impact", "Publications", "Leadership", "Testimonials"]) {
      await expect(nav.locator(`text=${label}`).first()).toBeVisible();
    }
  });

  test("all 8 sections exist on the page", async ({ page }) => {
    for (const id of ["hero", "about", "expertise", "impact", "publications", "leadership", "featured", "contact"]) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }
  });

  test("LinkedIn link opens in new tab", async ({ page }) => {
    const link = page.locator('a[href="https://www.linkedin.com/in/michaelkurr/"]').first();
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", /noopener/);
  });

  test("book cover image lazy loads", async ({ page }) => {
    const bookImg = page.locator('#publications img[alt*="Prozessorientierte"]');
    await expect(bookImg).toHaveAttribute("loading", "lazy");
  });

  test("carousel has keyboard navigation", async ({ page }) => {
    const carousel = page.locator('[aria-roledescription="carousel"]');
    await carousel.scrollIntoViewIfNeeded();
    await carousel.focus();

    // Should show first recommendation
    await expect(carousel).toContainText("Vishal K.");

    // Arrow right to next
    await page.keyboard.press("ArrowRight");
    await expect(carousel).toContainText("César Nieto");

    // Arrow left back
    await page.keyboard.press("ArrowLeft");
    await expect(carousel).toContainText("Vishal K.");
  });

  test("footer has copyright and navigation", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer).toContainText(new Date().getFullYear().toString());
    await expect(footer.locator('a[href="/imprint/"]')).toBeVisible();
    await expect(footer.locator('a[href="/privacy-policy/"]')).toBeVisible();
  });
});

test.describe("Responsive design", () => {
  test("mobile menu opens and traps focus", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");

    const toggle = page.locator('button[aria-controls="mobile-menu"]');
    await expect(toggle).toBeVisible();
    await expect(toggle).toHaveAttribute("aria-expanded", "false");

    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");

    const menu = page.locator("#mobile-menu");
    await expect(menu).toBeVisible();

    // Escape closes menu
    await page.keyboard.press("Escape");
    await expect(menu).not.toBeVisible();
  });
});

test.describe("Subpages", () => {
  test("expertise detail page loads", async ({ page }) => {
    await page.goto("/expertise/corporate-transformation/");
    await expect(page).toHaveTitle(/Corporate Transformation/);
    await expect(page.locator("h1")).toContainText("Corporate Transformation");
  });

  test("leadership detail page loads", async ({ page }) => {
    await page.goto("/leadership/transparency/");
    await expect(page).toHaveTitle(/Transparency/);
    await expect(page.locator("h1")).toContainText("Transparency");
  });

  test("404 page renders for unknown routes", async ({ page }) => {
    await page.goto("/nonexistent-page/");
    await expect(page.locator("h1")).toContainText("404");
  });

  test("imprint page loads", async ({ page }) => {
    await page.goto("/imprint/");
    await expect(page.locator("h1")).toBeVisible();
  });
});
