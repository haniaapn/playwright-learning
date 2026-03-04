import { APIRequestContext, expect } from '@playwright/test';

export async function addToCart(
  request: APIRequestContext,
  token: string,
  bookId: number,
  quantity = 1
) {
  const response = await request.post(
    'https://bookcart.azurewebsites.net/api/ShoppingCart/AddToCart',
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      data: {
        bookId,
        quantity
      }
    }
  );

  expect(response.status()).toBe(200);
}