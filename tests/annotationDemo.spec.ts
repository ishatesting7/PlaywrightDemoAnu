import {test, expect} from "@playwright/test"

test('Test 1 ',async({page}) => {
    

    await page.goto('https://www.google.com/');

    await page.getByLabel('Search', {exact:true}).fill('Automation Testing');

    await page.getByLabel('Search', {exact:true}).press('Enter');

    await page.waitForTimeout(10000);

    await page.getByRole('link', {name:'QA Automation Trends 2025'}).click();

})


test('Test 23',async({page}) => {
    

    await page.goto('https://www.google.com/');

    await page.getByLabel('Search', {exact:true}).fill('Automation Testing');

    await page.getByLabel('Search', {exact:true}).press('Enter');

    await page.waitForTimeout(10000);

    await page.getByRole('link', {name:'QA Automation Trends 2025'}).click();

})

test('Test 020',async({page}) => {
    

    await page.goto('https://www.google.com/');

    await page.getByLabel('Search', {exact:true}).fill('Automation Testing');

    await page.getByLabel('Search', {exact:true}).press('Enter');

    await page.waitForTimeout(10000);

    await page.getByRole('link', {name:'QA Automation Trends 2025'}).click();

})
