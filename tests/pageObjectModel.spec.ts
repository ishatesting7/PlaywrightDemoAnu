import {test, expect} from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test('Page Object Model Pattern',async ({page}) => {

    const homePage = new HomePage(page);

    await homePage.navigateToTheURL("https://www.saucedemo.com/", page);

    await homePage.loginWithUsernameAndPassword("standard_user","secret_sauce");

    
    
})