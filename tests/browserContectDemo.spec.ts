import {test, expect} from "@playwright/test"

test('Multiple Browser/Tabs',async ({page, browser}) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('input[id="user-name"]').fill('standard_user');

    await page.locator('input[id="password"]').fill('secret_sauce');
   
    await page.locator('input[id="login-button"]').click();

    await page.waitForTimeout(5000);

    //New Browser

    const context2 = await browser.newContext();
    const page2 = await context2.newPage();

    await page2.goto('https://blazedemo.com/');

    await page.waitForTimeout(5000);

    const newTab = await context2.newPage();

    newTab.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.waitForTimeout(5000);




    
    
})