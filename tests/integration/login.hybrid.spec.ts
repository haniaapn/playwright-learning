import { test, expect } from '@playwright/test';
import { loginAPI } from '../../src/api/auth.api';
import { ENV } from '../../config/env';

test.describe('Hybrid Login Validation', () => {

  test('User authenticated via API appears logged in on UI', async ({ page, request }) => {

    const auth = await loginAPI(
      request,
      ENV.username,
      ENV.password
    );

    await page.addInitScript(
      ({ token, userId }) => {
        localStorage.setItem('authToken', token);
        localStorage.setItem('userId', userId.toString());
      },
      { token: auth.token, userId: auth.userId }
    );

    await page.goto('/');

    await expect(page.getByText(auth.username)).toBeVisible();

  });

});