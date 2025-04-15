package com.library.services;




import java.util.List;
//import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.library.dao.BookDao;
import com.library.entities.Book;


/*private long id;
	private String title;
	private String Author;
	private Date buydate;
	private String Borrower;
	private Date borrowdate;*/
@Service
public class BookServiceimpl implements BookService {
	
	@Autowired
	private BookDao bookDao;
	
	//List<Book> list;
	
	public BookServiceimpl() {
		
//		list = new ArrayList<>();
//		
//		list.add(new Book(1, "BG", "Krsna", "01/01/2025", "test", "01/01/2025"));
//		list.add(new Book(69, "SB", "Krsna", "01/01/2025", "testy", "01/01/2025"));
//		
	}

	 @Override
	    public List<Book> getBooks(int pageNumber, int pageSize) {
	        // Create PageRequest to handle pagination
	        PageRequest pageRequest = PageRequest.of(pageNumber, pageSize);

	        // Fetch paged data from the database
	        Page<Book> pageBook = bookDao.findAll(pageRequest);

	        // Return the content (list of books) from the page
	        return pageBook.getContent();
	    }
	 
	 @Override
	 public List<Book> getBookss(){
	 return bookDao.findAll();}

	@SuppressWarnings("deprecation")
	@Override
	public Book getBook(long bookId) {
		// TODO Auto-generated method stub
		
//		Book b=null;
//		for(Book book:list) {
//			if(book.getId()==bookId) {
//				b=book;
//				break;
//			}
//		}
	return bookDao.getOne(bookId);
	}

	@Override
	public Book addBook(Book book) {
		// TODO Auto-generated method stub
//		list.add(book);
		bookDao.save(book);
		return book;
	}

	@Override
	public Book updateBook(Book book) {
		// TODO Auto-generated method stub
//		list.forEach(a-> {
//			if(a.getId() == book.getId()) {
//				a.setId(book.getId());
//				a.setTitle(book.getTitle());
//				a.setAuthor(book.getAuthor());
//				a.setBuydate(book.getBuydate());
//				a.setBorrower(book.getBorrower());
//				a.setBorrowdate(book.getBorrowdate());
//			}
//		});
		bookDao.save(book);
		return book;
	}

	@SuppressWarnings("deprecation")
	@Override
	public void deleteBook(long parseLong) {
//	    boolean removed = list.removeIf(book -> book.getId() == bookId);
//	    if (!removed) {
//	        throw new RuntimeException("Book with ID " + bookId + " not found.");
//	    }
		Book entity = bookDao.getOne(parseLong);
		bookDao.delete(entity);
	}


}
