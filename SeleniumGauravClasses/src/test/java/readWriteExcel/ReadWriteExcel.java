package readWriteExcel;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;

import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.testng.annotations.Test;

public class ReadWriteExcel {
	
	@Test
	public void readWriteExcel() throws Exception
	{
		File sourceFile = new File("C:\\Users\\Gaurav\\Desktop\\ReadWriteExcelNew.xls");
		FileInputStream input = new FileInputStream(sourceFile);
		HSSFWorkbook wb = new HSSFWorkbook(input);//.xls
		//XSSFWorkbook wb1=new XSSFWorkbook();//.xlsx
		//HSSFSheet sheet = wb.getSheetAt(0);
		HSSFSheet sheet = wb.getSheet("Sheet1");
		wb.close();
		
//		String data1=sheet.getRow(3).getCell(2).getStringCellValue();
//		System.out.println(data1);
		
		int rowCount=sheet.getLastRowNum()+1;
		int columnCount=sheet.getRow(0).getLastCellNum();
		System.out.println("Total number of Row is:"+rowCount);
		System.out.println("Total number of Column is:"+columnCount);
		
		for(int i=0;i<rowCount;i++)
		{
			for(int j=0;j<columnCount;j++)
			{
				String data=sheet.getRow(i).getCell(j).getStringCellValue();
				System.out.print(data+" ");
			}
			System.out.println();
		}
		
	
		
		
		sheet.getRow(0).createCell(0).setCellValue("TATA");
		
		FileOutputStream output=new FileOutputStream(sourceFile);
		
		
		wb.write(output);
		
		wb.close();
		System.out.println("Data written successfully");
		
		
	}

}
