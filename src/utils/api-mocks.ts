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
