import {test, expect} from '@playwright/test'

import path from 'path';

import { readExcelFile } from '../src/utils/excelHelper';

const filePath = path.join(__dirname,'../test-data/qa/TestDataPRright.xlsx');

const records = readExcelFile(filePath);

for (const rec of records)
{

    test(`Data Driven Testing : ${rec.password}`,async ({page}) => {
        
        console.log('Excel file Data');

        console.log(`Skill 1 - ${rec.username}`);

        console.log(`Skill 1 - ${rec.password}`);
    })
}