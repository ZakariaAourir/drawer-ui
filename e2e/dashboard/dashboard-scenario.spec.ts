import { test, expect } from '@playwright/test';

test('User opens side panel, uses autocomplete, and closes side panel on dashboard', async ({ page }) => {
    await page.goto('http://localhost:4200/dashboard');

  /* 1 ‑ open the drawer */
  await page.locator('.menu-button').click();
  const drawer = page.locator('.drawer.open');
  await expect(drawer).toBeVisible();

  /* 2 ‑ type in the autocomplete */
  const input = drawer.locator('input');
  await input.fill('Option');

  /* 3 ‑ wait for list items and read their text */
  const items = drawer.locator('ul.options li');
  await expect(items).toHaveCount(5);
  /* 4 ‑ close the drawer */
  await drawer.locator('.close-button').click();
  await expect(drawer).toBeHidden();
});