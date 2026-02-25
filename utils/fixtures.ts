import { test as base, Page, TestInfo } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { users } from '../data/users';

type MyFixtures = {
  loggedInPage: Page;
};

export const test = base.extend<MyFixtures>({
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.valid.username, users.valid.password);

    await use(page);
  }
});