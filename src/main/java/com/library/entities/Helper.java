package com.library.entities;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;


import com.library.model.bookExcel;

public class Helper {
	
	public static String[] HEADERS= {
			"id",
			"title",
			"author",
			"price",
			"quantity",
			"borrowdate",
			"borrower",
			"buydate"
	};
	
	public static String SHEET_NAME="book_data";
	
	public static ByteArrayInputStream dataToExcel(List<bookExcel> list) {
		
		Workbook workbook = new XSSFWorkbook();
		ByteArrayOutputStream out = new ByteArrayOutputStream();
		try {
			//create workbook
			
			Sheet sheet = workbook.createSheet(SHEET_NAME);
			
			//create roe
			Row row = sheet.createRow(0);
			
			for (int i=0; i < HEADERS.length; i++) {
				Cell cell = row.createCell(i);
				cell.setCellValue(HEADERS[i]);
			}
			int rowIndex=1;
			for(bookExcel b:list) {
				Row dataRow = sheet.createRow(rowIndex);
				rowIndex++;
				
				dataRow.createCell(0).setCellValue(b.getBookId());
				dataRow.createCell(1).setCellValue(b.getBookTitle());
				dataRow.createCell(2).setCellValue(b.getBookAuthor());
				dataRow.createCell(3).setCellValue(b.getBookPrice());
				dataRow.createCell(4).setCellValue(b.getBookQty());
				dataRow.createCell(5).setCellValue(b.getBookBorDate());
				dataRow.createCell(6).setCellValue(b.getBookBorrower());
				dataRow.createCell(7).setCellValue(b.getBookBorDate());
			}
			
			workbook.write(out);
			
			return new ByteArrayInputStream(out.toByteArray());
			
		}catch (IOException e) {
			e.printStackTrace();
			System.out.println("failed to generate excekl sheet");
			throw new RuntimeException("Failed to generate Excel file: " + e.getMessage());
		}
		
	}
			

}
