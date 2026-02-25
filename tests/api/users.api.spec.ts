import { test, expect } from '@playwright/test';

test.describe('API Automation - Users', () => {

  test('GET users list', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty('id');
    expect(body[0]).toHaveProperty('email');

    console.log(body[0]);
  });

  test('GET single user', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users/1');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(1);
    expect(body.email).toContain('@');
  });

  test('POST create user', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/users', {
      data: {
        name: 'hania',
        username: 'haniaqa',
        email: 'hania@test.com'
      }
    });

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.name).toBe('hania');
    expect(body.email).toBe('hania@test.com');
  });

});