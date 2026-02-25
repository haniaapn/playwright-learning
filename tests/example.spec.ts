// @ts-check
import { test, expect } from '@playwright/test';

test('open example.com', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
  const reloadPages = [1, 2, 3];
  for (const loop of reloadPages) {
    await page.reload();
    await expect(page).toHaveTitle(/Example Domain/);
    console.log(`Reloaded page ${loop} times, title page: ${await page.title()}`);
  }
});
