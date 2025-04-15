package com.library.model;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="book")
public class bookExcel {
	
	@Id
	@Column(name="id")
	private int BookId;

	@Column(name="title")
	private String BookTitle;
	
	@Column(name="author")
	private String BookAuthor;
	
	@Column(name="price")
	private int BookPrice;
	
	@Column(name="quantity")
	private int BookQty;
	
	@Column(name="borrower")
	private String BookBorrower;
	
	
	@Column(name="borrowdate")
	private String BookBorDate;
	
	@Column(name="buydate")
	private String BookBuy;

	public bookExcel() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getBookId() {
		return BookId;
	}

	public void setBookId(int bookId) {
		BookId = bookId;
	}

	public String getBookTitle() {
		return BookTitle;
	}

	public void setBookTitle(String bookTitle) {
		BookTitle = bookTitle;
	}

	public String getBookAuthor() {
		return BookAuthor;
	}

	public void setBookAuthor(String bookAuthor) {
		BookAuthor = bookAuthor;
	}

	public int getBookPrice() {
		return BookPrice;
	}

	public void setBookPrice(int bookPrice) {
		BookPrice = bookPrice;
	}

	public int getBookQty() {
		return BookQty;
	}

	public void setBookQty(int bookQty) {
		BookQty = bookQty;
	}

	public String getBookBorrower() {
		return BookBorrower;
	}

	public void setBookBorrower(String bookBorrower) {
		BookBorrower = bookBorrower;
	}

	public String getBookBorDate() {
		return BookBorDate;
	}

	public void setBookBorDate(String bookBorDate) {
		BookBorDate = bookBorDate;
	}

	public String getBookBuy() {
		return BookBuy;
	}

	public void setBookBuy(String bookBuy) {
		BookBuy = bookBuy;
	}

	
	}

	
	
	


