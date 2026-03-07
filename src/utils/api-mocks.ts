import { Page } from '@playwright/test';
import books from '../data/books.mock.json';

export async function mockBooksAPI(page: Page) {
  await page.route('**/api/book/**', async route => {
    console.log('MOCK BOOK API');

    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(books)
    });
  });
}

export async function mockAddToCartAPI(page: Page) {
  await page.route('**/api/shoppingcart/add**', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        success: true
      })
    });
  });
}

export async function mockCartAPI(page: Page) {
  await page.route('**/api/shoppingcart/**', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        items: [
          {
            bookId: 1,
            title: "Playwright Automation Guide",
            quantity: 1,
            price: 25
          }
        ]
      })
    });
  });
}