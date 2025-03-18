import { Page } from '@playwright/test';

export class CartPage {
    private page: Page;
    private cartItem = '.cart_item';
    private checkoutButton = '[data-test="checkout"]';

    constructor(page: Page) {
        this.page = page;
    }

    async isCartItemVisible() {
        return await this.page.locator(this.cartItem).isVisible();
    }

    async proceedToCheckout() {
        await this.page.click(this.checkoutButton);
    }
}
