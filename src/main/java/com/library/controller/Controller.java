package com.library.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.library.entities.Book;
import com.library.services.BookService;

@RestController
public class Controller {
	@Autowired
	private BookService bookService;
	
	@GetMapping("/home")
	public String home() {
		return "this is home";
	}

	
	//get books
	 @GetMapping("/books")
	    public List<Book> getBooks(@RequestParam int page, @RequestParam int size) {
	        return bookService.getBooks(page, size);
	    }
	
	@GetMapping("/bookss")
	public List<Book> getBookss(){
	
		return this.bookService.getBookss();}
	
	//get single book
	@GetMapping("/bookss/{bookId}")
	public Book getBook(@PathVariable String bookId) {
		return this.bookService.getBook(Long.parseLong(bookId));}
	
	//add book
	@PostMapping("/bookss")
	public Book addBooks(@RequestBody Book book) {
		
		return this.bookService.addBook(book); }
	
	//update book
	@PutMapping("/bookss/{bookId}")
	public Book updateBook(@RequestBody Book book) {
		return this.bookService.updateBook(book);
	}
	
	//delete book
	@DeleteMapping("/bookss/{bookId}")
	public ResponseEntity<HttpStatus> deleteBook(@PathVariable String bookId) {
	    try {
	        this.bookService.deleteBook(Long.parseLong(bookId));
	        return new ResponseEntity<>(HttpStatus.OK);
	    } catch (RuntimeException e) {
	        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    } 
	    }
	}

	
	
	
	

