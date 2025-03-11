import {test, expect} from '@playwright/test'

test.describe('Regression Testing', () => {

    test('Test 1 - Regression',async ({page}) => {

        await page.goto('https://www.saucedemo.com/');

    })

})

test.describe('Sanity Testing', () => {

    test('Test 1 - Sanity',async ({page}) => {

        await page.goto('https://www.saucedemo.com/');

    })

})

test.describe('Smoke Testing', () => {

    test('Test 1 - Smoke',async ({page}) => {

        await page.goto('https://www.saucedemo.com/');

    })

})

//Smoke - Critical Functionality 
//Sanity - Basic Functionality should work fine. Validating weather that minor change is working as expected
//Regression - Validating the changes done by developer - It should not effect existing functionality



