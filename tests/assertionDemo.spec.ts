import {test, expect} from "@playwright/test"

test('Assertion Demo', async({page})=>{


    await page.goto('https://www.facebook.com/');

    await expect(page.getByPlaceholder('Email address or phone number',{exact:true})).toBeVisible();

    await expect(page.getByPlaceholder('Email address or phone number',{exact:true})).toBeEditable();

    await expect(page.getByPlaceholder('Email address or phone number',{exact:true})).toBeEnabled();
    
    await expect(page.getByPlaceholder('Email address or phone number',{exact:true})).toBeEmpty();

    await expect(page.getByPlaceholder('Password',{exact:true})).toBeVisible();
    
    await expect(page.getByPlaceholder('Password',{exact:true})).toBeEditable();

    await expect(page.getByPlaceholder('Password',{exact:true})).toBeEnabled();

    await expect(page.getByPlaceholder('Password',{exact:true})).toBeEmpty();

    await expect(page.locator('#reg_pages_msg')).toHaveText('Create a Page for a celebrity, brand or business.');

    await expect(page.locator('#reg_pages_msg')).toContainText('Create a Page');

    await expect(page.locator('#pageFooter ul li')).toHaveCount(45);

    //await expect(page.locator('#pageFooter ul li').last()).not.toBeEnabled();
    await expect(page.locator('#pageFooter ul li').last()).toHaveText('Activity log');


    //TDD
    
    //BDD 
})

