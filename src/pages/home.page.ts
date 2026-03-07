import { Page, Locator } from '@playwright/test';

export class HomePage {

  readonly page: Page;
  readonly firstBook: Locator;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstBook = page.locator('app-book-card').first();
    this.addToCartButton = this.firstBook.getByRole('button', { name: 'Add to Cart' });
  }

  async goto() {
    await this.page.goto('/');
  }

  async addFirstBookToCart() {
    await this.addToCartButton.click();
  }

}