package com.library.services;

import java.util.List;

import com.library.entities.Book;

public interface BookService {

	List<Book> getBooks(int pageNumber, int pageSize);
	public List<Book> getBookss();
	public Book getBook(long bookId);
	public Book addBook(Book book);
	public Book updateBook(Book book);
	public void deleteBook(long parseLong);
	
}
