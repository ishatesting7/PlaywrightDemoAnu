import * as EXCEL from 'xlsx';
import fs from 'fs';

//Define the structure of the data for reading purpose
interface TestRecord
{
    username:string,
    password:string
}

export function readExcelFile(filepath: string)
{
    // Read the excel file
    const file = fs.readFileSync(filepath);

    // Read in workbook
    const workbook = EXCEL.read(file);

    // Get the sheet
    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    // convert into JSON
    const rawData: any[] = EXCEL.utils.sheet_to_json(sheet, {header:1})

    const records: TestRecord[] = rawData.slice(1).map((column:any) =>({

        username: column[0],
        password: column[1]
        
    }))
    return records;
}