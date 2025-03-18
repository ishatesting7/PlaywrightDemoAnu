import {Locator, Page} from "@playwright/test"

export class HomePage{

    readonly page:Page;
    readonly userNameTextBox:Locator;
    readonly passWordTextBox:Locator;
    readonly loginBtn:Locator;
    
    constructor(page: Page)
    {
    this.page = page;
    //Elements
    this.userNameTextBox = page.locator('#user-name');
    this.passWordTextBox = page.locator('#password');
    this.loginBtn = page.locator('[type="submit"]');
    }

    async loginWithUsernameAndPassword(user:string, pass: string)
    {
        await this.userNameTextBox.fill(user);
        await this.passWordTextBox.fill(pass);
        await this.loginBtn.click();
    }

    async navigateToTheURL(url:string, page: Page)
    {
        await this.page.goto(url);
    
    }
}