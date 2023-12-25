import { Workbook } from "exceljs";

type ColumnHeader = {
  header: string;
  key: string;
  width?: number;
}

type WorkBookConfig = {
  creator?: string;
  created?: Date;
}

type ExcelJsExportOptions = {
  sheetName: string;
  columnHeaders: ColumnHeader[];
  rows: any[];
  other?: WorkBookConfig;
}

/**
 * Exports data to excel.
 * @param options 
 * @returns 
 */
export async function excelJsExport(options: ExcelJsExportOptions): Promise<any> {
  const { sheetName, columnHeaders, rows, other } = options;

  // create a workbook
  const workbook = new Workbook();

  if (other) {
    if (other.creator) workbook.creator = other.creator;
    workbook.created = other.created || new Date();
  }

  // create a worksheet
  const worksheet = workbook.addWorksheet(sheetName);

  const columnHeadersLen = columnHeaders.length;
  if (columnHeadersLen <= 0) {
    throw new Error("Missing column header");
  } else {
    const columnHeadersData = columnHeaders.map((item, index) => {
      return {
        header: item.header,
        key: item.key,
        width: item.width || 20,
      }
    });
    worksheet.columns = columnHeadersData;
  }

  const rowsLen = rows.length;
  if (rowsLen > 0) {
    const rowsData: any[] = [];
    rows.forEach((row) => {
      const obj = {};
      columnHeaders.forEach((column) => {
        obj[column.key] = row[column.key];
      });
      rowsData.push(obj);
    });
    if (rowsData) worksheet.addRows(rowsData);
  }

  const xlsxBuffer = await workbook.xlsx.writeBuffer();
  return xlsxBuffer;
}

/**
 * Import and parse excel
 * @param fileBase64 
 * @param sheetName 
 * @param columnObj 
 */
export async function excelJsImport<T>(fileBase64: string, sheetName: string, columnObj: { [key in keyof T]: number }): Promise<T[]> {
  const excelBuffer = Buffer.from(fileBase64, "base64");
  const workbook = new Workbook();
  await workbook.xlsx.load(excelBuffer);
  const worksheet = workbook.getWorksheet(sheetName);
  if (!worksheet) {
    throw new Error("Cannot find worksheet");
  }
  const rows = worksheet.getSheetValues();
  const result: T[] = [];
  for (const row of rows) {
    if (!row) continue;
    const obj = {} as T;
    for (const key of Object.keys(columnObj)) {
      obj[key] = row[columnObj[key]];
    }
    result.push(obj);
  }
  return result;
}