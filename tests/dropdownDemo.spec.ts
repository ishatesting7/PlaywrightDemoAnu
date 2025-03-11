import {test, expect} from '@playwright/test';
import exp from 'constants';


test('Select Dropdown Value', async({page})=>{

    await page.goto('https://www.dummyticket.com/dummy-ticket-for-visa-application/');

    await page.selectOption('#billing_country', 'BE');


    const selectedValue = await page.textContent('#select2-billing_country-container');

    expect(selectedValue).toBe('Belgium');


})