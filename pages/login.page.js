export class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.getByLabel('Username');
    this.password = page.getByLabel('Password');
    this.submit = page.getByRole('button', { name: 'Submit' });
    this.error = page.locator('#error');
    this.title = page.locator('.post-title');
  }

  async goto() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
  }

  async login(username, password) {
    if (username) await this.username.fill(username);
    if (password) await this.password.fill(password);
    await this.submit.click();
  }
}