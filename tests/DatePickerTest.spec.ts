import {test, expect} from "@playwright/test"

test('Selecting Date',async ({page}) => {

    page.goto('https://jqueryui.com/datepicker/');

    const iframe = page.frameLocator('[class="demo-frame"]')

    //HardCoding
    await iframe.locator('#datepicker').fill('12/07/2003');

    await page.waitForTimeout(5000)
    //Selecting Dynamic Date
    await iframe.locator('#datepicker').click();
    await iframe.locator('[class="ui-state-default ui-state-highlight ui-state-hover"]').click();
    await page.waitForTimeout(5000)

    //Select Previous Date  
    //
    await iframe.locator('#datepicker').click();
    await iframe.locator('[class="ui-datepicker-prev ui-corner-all"]').click();
    await iframe.locator('[data-date="14"]').click();
    await page.waitForTimeout(5000)
    

    
})