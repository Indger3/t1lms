package com.library.entities;



import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Book {
	
	

	@Id
	private long id;
	private String title;
	private String author;
	private String buydate;
	private String borrower;
	private String borrowdate;
	private int quantity;
	private int price;
	public Book(long id, String title, String author,String buydate, String borrower, String borrowdate, int quantity, int price) {
		super();
		this.id = id;
		this.title = title;
		this.author = author;
		this.buydate = buydate;
		this.borrower = borrower;
		this.borrowdate = borrowdate;
		this.quantity = quantity;
		this.price = price;
		
	}
	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getBuydate() {
		return buydate;
	}
	public void setBuydate(String buydate) {
		this.buydate = buydate;
	}
	public String getBorrower() {
		return borrower;
	}
	public void setBorrower(String borrower) {
		this.borrower = borrower;
	}
	public String getBorrowdate() {
		return borrowdate;
	}
	public void setBorrowdate(String borrowdate) {
		this.borrowdate = borrowdate;
		
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
		
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
		
	}
	
	@Override
	public String toString() {
		return "Book [id=" + id + ", title=" + title + ", author=" + author + ", buydate=" + buydate + ", borrower="
				+ borrower + ", borrowdate=" + borrowdate + ",quantity=" + quantity + ",price=" + price + "]";
	}
	
	
	
	
	
	
}
