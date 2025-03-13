import {test, expect} from "@playwright/test"
import testData from '../test-data/qa/testData.json';

type TestData = {
    TestDataSet:{
        username1:string,
        password1:string
    },
    TestDataSet2:{
        username1:string,
        password1:string
    }
}

const TypeDataValue = testData as TestData;

for (const dataSetName in TypeDataValue ){

    const userValue = TypeDataValue[dataSetName as keyof TestData];
    
    test(`Hello Demo World -- ${userValue.username1}`, async({page}) => {

        console.log(`Data Set Name: ${dataSetName}`)
        console.log(`UserName -- : ${userValue.username1}`);
        console.log(`Password -- : ${userValue.password1}`);

        await page.goto('https://www.saucedemo.com/');

        await page.locator('#user-name').fill(userValue.username1);

        await page.locator('#password').fill(userValue.password1);
        await page.waitForTimeout(4000)
});
}

