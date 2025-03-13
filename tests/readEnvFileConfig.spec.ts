import {test, expect} from "@playwright/test"

test('Read config file in playwright',async ({page}) => {

    await page.goto(`${process.env.GOOGLEURL}`);

    await page.locator('.gLFyf').fill(`${process.env.SEARCHKEYWORD}`)
    
})