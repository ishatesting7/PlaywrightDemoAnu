import {test, expect} from "@playwright/test"

const searchKeyword = ['Playwright Demo','Cypress Demo', 'API Testing'];


for(const searchKey of searchKeyword )
{

    test(`Parameterized Test ${searchKey}`,async ({page}) => {
        
        await page.goto('https://www.google.com/');

        await page.getByLabel('Search', {exact:true}).fill(searchKey)

        await page.getByLabel('Search',{exact:true}).press('Enter');

        await page.waitForTimeout(5000);
        
    })

}