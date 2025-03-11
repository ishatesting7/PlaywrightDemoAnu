import {test, expect} from '@playwright/test';


test('Select Dropdown Value', async({page})=>{

    await page.goto('https://www.dummyticket.com/dummy-ticket-for-visa-application/');

    await page.click('#select2-billing_country-container')

    await page.fill('.select2-search__field', 'Australia');

    await page.keyboard.press('Enter');

    const selectedValue = await page.textContent('#select2-billing_country-container');

    console.log(selectedValue);

    expect(selectedValue).toBe('Australia');

})