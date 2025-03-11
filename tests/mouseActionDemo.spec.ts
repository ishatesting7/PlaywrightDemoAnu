import {expect, test} from '@playwright/test';

test('Mouse Action',async ({page}) => {
    

    page.goto('https://tutorialsninja.com/demo/');

    //Hover
    await page.hover('[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=20"]');

    //Scrolling
    await page.mouse.wheel(0,500);

    await page.mouse.wheel(0, -500);

    await page.keyboard.press

    //Hold and Release

    await page.mouse.down(); // Hold

    await page.mouse.up(); // Release

})