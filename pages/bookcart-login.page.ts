import { Page, Locator } from '@playwright/test';

export class BookcartLoginPage {
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.email = page.locator('input[formcontrolname="username"]');
    this.password = page.locator('input[formcontrolname="password"]');
    this.loginBtn = page.getByRole('button', { name: 'Login' });
  }

  async goto() {
    await this.page.goto('https://bookcart.azurewebsites.net/login');
  }

  async login(username: string, password: string) {
    await this.email.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
  }
}