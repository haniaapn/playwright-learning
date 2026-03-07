import { test, expect } from '@playwright/test';
import { HomePage } from '../../src/pages/home.page';
import { CartPage } from '../../src/pages/cart.page';
import books from '../../src/data/books.mock.json';
import { mockBooksAPI } from '../../src/utils/api-mocks';

test.describe('Day 12 - API Mocking Cart Flow', () => {

  test('User can see mocked books and add product to cart', async ({ page }) => {

    await mockBooksAPI(page);

    const home = new HomePage(page);
    const cart = new CartPage(page);

    await home.goto();

    await page.waitForSelector('mat-card');

    await expect(page.locator('app-book-card')).toHaveCount(books.length);

    await home.addFirstBookToCart();

    await cart.openCart();

    await cart.validateCartHasItems();

  });

});