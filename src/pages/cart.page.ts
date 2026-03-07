import { Page, expect } from '@playwright/test';

export class CartPage {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openCart() {
    await this.page.goto('/shopping-cart');
  }

  async validateCartHasItems() {
    await expect(this.page.locator('mat-card')).toHaveCount(1);
  }

}