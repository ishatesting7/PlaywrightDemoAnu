import {Locator, Page} from "@playwright/test"

export class InventoryPage{

    readonly page:Page;
    readonly productTitle:Locator;
    readonly passWordTextBox:Locator;
    readonly loginBtn:Locator;
    
    constructor(page: Page)
    {
    this.page = page;
    //Elements
    this.productTitle = page.locator('[data-test="title"]');
    this.passWordTextBox = page.locator('#password');
    this.loginBtn = page.locator('[type="submit"]');
    }

    async loginWithUsernameAndPassword(user:string, pass: string)
    {
        await this.productTitle.fill(user);
        await this.passWordTextBox.fill(pass);
        await this.loginBtn.click();
    }

    async navigateToTheURL(url:string, page: Page)
    {
        await this.page.goto(url);
    
    }
}