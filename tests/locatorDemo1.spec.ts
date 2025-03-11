import {test, expect, Browser, Page, Locator} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'
import {faker} from '@faker-js/faker';
test('locator test', async()=>{
    const browser:Browser =  await chromium.launch({headless: false, channel: 'chrome'});
    const page:Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
  
    //crate a web element(locator) + perform action on it(click, fill)
    //1. Id:unique
    const firstName:Locator = page.locator('id=input-firstname');
    const lastName:Locator = page.locator('id=input-lastname');

    await firstName.fill("QA");
    await lastName.fill("Automation Labs");

    //2. class name:
    const logo:Locator = page.locator('.img-responsive');
    const logoExist = await logo.isEnabled();
    console.log(logoExist);

    //3. text:
    const header:Locator = page.locator('text=Register Account');
   const headerExist = await header.isEnabled();
   console.log(headerExist);

   const continueBtn:Locator = page.locator('text=Continue');
   const continueBtnExist = await continueBtn.isEnabled();
   console.log(continueBtnExist);

   const forgotPwdLink:Locator = page.locator('text=Forgotten Password');
   const forgotPwdLinkExist = await forgotPwdLink.isEnabled();
   console.log(forgotPwdLinkExist);

   //4. css:
   const email:Locator = page.locator('css=input#input-email');
   const telephone:Locator = page.locator('css=input[name="telephone"]');
   const privacyCheckBox:Locator = page.locator('css=input[type="checkbox"]');

    const randomEmail = `user${Date.now()}@test.com`;
    const randomEmail1 = faker.internet.email();
    
    await email.fill(randomEmail);
    await telephone.fill("88888888");
    await privacyCheckBox.click();

    //5. xpath:
    const password:Locator = page.locator('xpath=//input[@id="input-password"]');
    //const search:Locator = page.locator('xpath=//input[@name="search" and @type="text"]');

    const confirmPassword:Locator = page.locator('[name="confirm"]');



    await password.fill("test@123");
    await confirmPassword.fill("test@123");
    //await search.fill('macbook');
    
    const continueButton:Locator = page.locator('[type="submit"]');

    await continueBtn.click();

   // await new Promise(() => {}); // prevents your script from exiting! 


});