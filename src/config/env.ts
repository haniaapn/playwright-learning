function required(value: string | undefined, name: string): string {
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export const ENV = {
  username: required(process.env.BOOKCART_USERNAME, 'BOOKCART_USERNAME'),
  password: required(process.env.BOOKCART_PASSWORD, 'BOOKCART_PASSWORD'),
};