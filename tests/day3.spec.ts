import { test, expect } from '@playwright/test';

test('login success', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.getByLabel('Username').fill('student');
  await page.getByLabel('Password').fill('Password123');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.locator('.post-title')).toHaveText('Logged In Successfully');
});

test('Login with wrong password', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.getByLabel('Username').fill('student');
  await page.getByLabel('Password').fill('WrongPassword');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.locator('#error')).toContainText('invalid');
});

test('Login with empty username', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.getByLabel('Password').fill('Password123');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.locator('#error')).toContainText('invalid');
});