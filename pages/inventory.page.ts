import { Page } from '@playwright/test';

export class InventoryPage {
    private page: Page;
    private inventoryList = '.inventory_item';
    private addToCartButton = 'button[data-test="add-to-cart-sauce-labs-backpack"]';
    private cartIcon = '.shopping_cart_link';

    constructor(page: Page) {
        this.page = page;
    }

    async isInventoryPageLoaded() {
        return await this.page.locator(this.inventoryList).isVisible();
    }

    async addItemToCart() {
        await this.page.click(this.addToCartButton);
    }

    async goToCart() {
        await this.page.click(this.cartIcon);
    }
}

