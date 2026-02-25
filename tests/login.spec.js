import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { users } from '../data/users';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
});

test('login success', async ({ page }) => {
  await loginPage.login(users.valid.username, users.valid.password);
  await expect(loginPage.title).toHaveText('Logged In Successfully');
});

test('login wrong password', async ({ page }) => {
  await loginPage.login(users.invalid.username, users.invalid.password);
  await expect(loginPage.error).toContainText('invalid');
});