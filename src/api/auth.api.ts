import { APIRequestContext, expect } from '@playwright/test';

export interface LoginResponse {
  token: string;
  userId: number;
  username: string;
}

export async function loginAPI(
  request: APIRequestContext,
  username: string,
  password: string
): Promise<LoginResponse> {

  const response = await request.post('/api/login', {
    data: {
      username,
      password
    }
  });

  expect(response.status()).toBe(200);

  const body = await response.json();

  return {
    token: body.token,
    userId: body.userDetails.userId,
    username: body.userDetails.username
  };
}