import { test, expect } from '../fixtures/auth.fixture';

test('dashboard access', async ({ loggedInPage }) => {
  await expect(loggedInPage).toHaveURL(/logged-in/);
});