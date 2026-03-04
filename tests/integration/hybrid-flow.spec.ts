import { test, expect } from '@playwright/test';
import { createUser } from '../../src/api/user.api';

test('Hybrid Flow: API setup → UI validation', async ({ request, page }) => {
  // API Setup
  const user = await createUser(request);

  console.log('User created:', user);

  // UI Validation (simulasi)
  await page.goto('https://practicetestautomation.com/logged-in-successfully/');

  await expect(page.locator('.post-title')).toHaveText('Logged In Successfully');

  console.log(`Validated UI using API-created user: ${user.email}`);
});