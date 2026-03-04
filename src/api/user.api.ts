import { APIRequestContext, expect } from '@playwright/test';

export async function createUser(request: APIRequestContext) {
  const response = await request.post('https://jsonplaceholder.typicode.com/users', {
    data: {
      name: 'hania',
      username: 'haniaqa',
      email: `hania_${Date.now()}@test.com`
    }
  });

  expect(response.status()).toBe(201);

  return response.json();
}