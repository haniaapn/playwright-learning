import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { users } from '../data/users';

test.describe('Login Tests', () => {
  test('login success', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.valid.username, users.valid.password);

    await expect(loginPage.title).toHaveText('Logged In Successfully');
  });

  test('wrong password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.invalid.username, users.invalid.password);

    await expect(loginPage.error).toHaveText('Your password is invalid!');
  });
});