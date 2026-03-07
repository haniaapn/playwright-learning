import { test, expect } from '@playwright/test';
import { HomePage } from '../../src/pages/home.page';
import { CartPage } from '../../src/pages/cart.page';
import {mockBooksAPI} from '../../src/utils/api-mocks';

test.describe('Verify Cart Badge Update', () => {

test('User adds book to cart and badge updates', async ({ page }) => {

  await mockBooksAPI(page);

  const home = new HomePage(page);
  const cart = new CartPage(page);

  await home.goto();

  await expect(page.locator('app-book-card')).toHaveCount(4);

  await home.addFirstBookToCart();

  await expect(page.locator('.mat-badge-content')).toContainText('1');

  await cart.openCart();

  await cart.validateCartHasItems();

});

});