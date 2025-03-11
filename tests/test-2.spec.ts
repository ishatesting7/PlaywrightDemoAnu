import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
  await page.getByRole('textbox', { name: 'Visa application' }).click();
  await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
  await page.getByRole('combobox').filter({ hasText: /^$/ }).fill('Office');
  await page.getByRole('option', { name: 'Office work place needs it' }).click();
  await page.getByRole('textbox', { name: 'India' }).click();
  await page.getByRole('option', { name: 'Iraq' }).click();
});