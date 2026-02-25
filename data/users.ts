export type User = {
  username: string;
  password: string;
};

export const users: Record<string, User> = {
  valid: {
    username: 'student',
    password: 'Password123'
  },
  invalid: {
    username: 'student',
    password: 'WrongPassword'
  }
};