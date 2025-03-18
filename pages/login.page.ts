import { Page } from '@playwright/test';

export class LoginPage {
    private page: Page;
    private usernameField = '#user-name';
    private passwordField = '#password';
    private loginButton = '#login-button';
    private errorMessage = '[data-test="error"]';

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto("/");
    }

    async login(username: string, password: string) {
        await this.page.fill(this.usernameField, username);
        await this.page.fill(this.passwordField, password);
        await this.page.click(this.loginButton);
    }

    async getErrorMessage() {
        return await this.page.textContent(this.errorMessage);
    }
}
