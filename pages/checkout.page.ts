import { Page } from '@playwright/test';

export class CheckoutPage {
    private page: Page;
    private firstNameField = '#first-name';
    private lastNameField = '#last-name';
    private zipField = '#postal-code';
    private continueButton = '[data-test="continue"]';
    private finishButton = '[data-test="finish"]';

    constructor(page: Page) {
        this.page = page;
    }

    async fillCheckoutDetails(firstName: string, lastName: string, zip: string) {
        await this.page.fill(this.firstNameField, firstName);
        await this.page.fill(this.lastNameField, lastName);
        await this.page.fill(this.zipField, zip);
        await this.page.click(this.continueButton);
    }

    async finishCheckout() {
        await this.page.click(this.finishButton);
    }
}
