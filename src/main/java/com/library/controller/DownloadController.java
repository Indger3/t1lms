package com.library.controller;

import java.io.ByteArrayInputStream;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.library.services.ExcelService;

@RestController
@RequestMapping("/download")
public class DownloadController {
	
	@Autowired
	private ExcelService service;
	
	@GetMapping("/excel")
public ResponseEntity<Resource> download() throws IOException{
	String filename="book_data.xlsx";
	ByteArrayInputStream actualData= service.getActualData();
	InputStreamResource file = new InputStreamResource(actualData);
	
	ResponseEntity<Resource> body = ResponseEntity.ok()
	.header(HttpHeaders.CONTENT_DISPOSITION,"attachment; filename="+filename)
	.contentType(MediaType.parseMediaType("application/vnd.ms-excel"))
	.body(file);
	return body;
			
}
}
