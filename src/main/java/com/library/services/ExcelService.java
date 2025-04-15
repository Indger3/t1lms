package com.library.services;

import java.io.ByteArrayInputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.library.dao.BookRepo;
import com.library.entities.Helper;
import com.library.model.bookExcel;

@Service
public class ExcelService {
	
	@Autowired
	private BookRepo repo;
	
	
	public ByteArrayInputStream getActualData() {
		List <bookExcel> all = repo.findAll();
		ByteArrayInputStream byteArrayInputStream = Helper.dataToExcel(all);
		return byteArrayInputStream;
		
		
	}

}
