import {test, expect} from "@playwright/test"
import path from "path"

test('Capture Screenshot',async ({page}) => {
    
    page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 


    // Element Screenshot
    await page.locator('[alt="company-branding"]').screenshot({path:'./screenshots/ElementScreenshot.png'});

    // Page Screenshot

    await page.locator("input[placeholder='Username']").fill('Admin')

    await page.locator("input[placeholder='Password']").fill('admin123');

    await page.locator("xpath=//button[@type='submit']").click();

    await page.waitForTimeout(5000);

    await page.screenshot({path:'./screenshots/pageScreenshot.png'});


    // Full page Screenshot

    await page.screenshot({path:'./screenshots/fullPageScreenshot.png', fullPage:true});

})