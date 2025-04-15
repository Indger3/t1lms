import React, { useState, useEffect } from 'react';
import { Table, Button, Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import MainLayout from './MainLayout';

const Book = () => {
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/bookss')
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
    }, []);

    const handleDelete = (bookId) => {
        axios.delete(`http://localhost:8080/bookss/${bookId}`)
            .then(() => {
                toast("Book deleted successfully");
                setBooks(books.filter(book => book.id !== bookId));
            })
            .catch(error => {
                console.error('Error deleting book:', error);
                toast("Error deleting book");
            });
    };

    const handleUpdate = (bookId) => {
        navigate(`/update-book/${bookId}`);
    };

    const getExcel = () => {
        axios.get('http://localhost:8080/download/excel', { responseType: 'blob' })
            .then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'books.xlsx'); // Set default filename
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                toast.success("Excel sheet downloaded successfully") //{onClose: () => navigate('/books'), // Navigate to /books after toast is closed
                    //autoClose: 3000, // Time in milliseconds (3 seconds)
                     //});
                
            })
            .catch((error) => {
                console.error('Error downloading Excel:', error);
                toast.error("Error downloading excel");
            });
    };
    

    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = books.slice(firstIndex, lastIndex);
    const npages = Math.ceil(books.length / recordsPerPage);
    const numbers = [...Array(npages + 1).keys()].slice(1);

    const nextPage = () => {
        if (currentPage !== npages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prePage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const changeCPage = (id) => {
        setCurrentPage(id);
    };

    return (
        <MainLayout>
            <Container>
                <h1 className="text-center">All Books</h1> <Button onClick={getExcel}>Download Excel Sheet</Button>
                <Row>
                    <Col>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>Buy Date</th>
                                    <th>Borrower</th>
                                    <th>Borrow Date</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.length > 0 ? (
                                    records.map((book, index) => (
                                        <tr key={book.id}>
                                            <th scope="row">{firstIndex + index + 1}</th> {/* Adjusted row number */}
                                            <td>{book.title}</td>
                                            <td>{book.author}</td>
                                            <td>{book.buydate}</td>
                                            <td>{book.borrower}</td>
                                            <td>{book.borrowdate}</td>
                                            <td>{book.quantity}</td>
                                            <td>{book.price}</td>
                                            <td>
                                                <Button
                                                    color="warning"
                                                    onClick={() => handleUpdate(book.id)}
                                                >
                                                    Update
                                                </Button>
                                                <Button
                                                    color="danger"
                                                    onClick={() => handleDelete(book.id)}
                                                >
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="9">No books found</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>

                        <nav>
                            <ul className='pagination'>
                                <li className='page-item'>
                                    <a href="#" className='page-link' onClick={prePage}>Prev</a>
                                </li>
                                {numbers.map((n, id) => (
                                    <li
                                        className={`page-item ${currentPage === n ? 'active' : ''}`} 
                                        key={id}
                                    >
                                        <a href="#" className="page-link" onClick={() => changeCPage(n)}>
                                            {n}
                                        </a>
                                    </li>
                                ))}
                                <li className='page-item'>
                                    <a href="#" className='page-link' onClick={nextPage}>Next</a>
                                </li>
                            </ul>
                        </nav>
                    </Col>
                </Row>
                <ToastContainer />
            </Container>
        </MainLayout>
    );
};

export default Book;
