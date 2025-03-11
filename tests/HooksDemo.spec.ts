import{test, expect} from "@playwright/test";

test.beforeAll(async()=>{


    console.log('I am in before all');

})

test.afterAll(async()=>{

    console.log('I am in after all');

})
test.beforeEach(async({page})=>{

    page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    console.log('I am in before each');

})
test.afterEach(async()=>{

    console.log('I am in after each');

})


test('Test 1 ', async({page})=>{

    await page.locator("input[placeholder='Username']").fill('Admin')

    await page.locator("input[placeholder='Password']").fill('admin123');

    await page.locator("xpath=//button[@type='submit']").click();
})


test('Test 2 ', async({page})=>{

   // 
    await page.locator("input[placeholder='Username']").fill('Admin')

    await page.locator("input[placeholder='Password']").fill('admin123');

    await page.locator("xpath=//button[@type='submit']").click();

    await page.locator('[href="/web/index.php/time/viewTimeModule"]').click();

    await page.locator('.oxd-main-menu-item').first().click();

    await page.locator('.oxd-main-menu-item').last().click();
    
})