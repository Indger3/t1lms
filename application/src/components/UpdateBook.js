import React, { useState, useEffect } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Header from './Header';
import MainLayout from './MainLayout';
const UpdateBook = () => {
    const [book, setBook] = useState({
        title: '',
        author: '',
        buydate: '',
        borrower: '',
        borrowdate: '',
        quantity: '',
        price: ''
    });
    const { bookId } = useParams(); // Get the book ID from the URL
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the current book details by ID
        axios.get(`http://localhost:8080/bookss/${bookId}`)
            .then(response => {
                setBook(response.data);
            })
            .catch(error => {
                console.error('Error fetching book data:', error);
            });
    }, [bookId]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Filter out empty fields that haven't been modified
        const updatedBook = {};

        Object.keys(book).forEach(key => {
            if (book[key] !== '') {
                updatedBook[key] = book[key];
            }
        });

        // Update the book (only send the fields that are updated)
        axios.put(`http://localhost:8080/bookss/${bookId}`, updatedBook)
            .then(() => {
                toast("Book updated successfully!");
                navigate('/books'); // Redirect to the main book list page
            })
            .catch(error => {
                console.error('Error updating book:', error);
                toast("Error updating book");
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook(prevBook => ({
            ...prevBook,
            [name]: value
        }));
    };

    return (

        
            
            
         <Container className="mt-5">
                <Header />
                 
                <MainLayout>
                <h2 className="text-center">Update Book</h2>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input
                            type="text"
                            name="title"
                            id="title"
                            value={book.title}
                            onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="author">Author</Label>
                        <Input
                            type="text"
                            name="author"
                            id="author"
                            value={book.author}
                            onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="buydate">Buy Date</Label>
                        <Input
                            type="date"
                            name="buydate"
                            id="buydate"
                            value={book.buydate}
                            onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="borrower">Borrower</Label>
                        <Input
                            type="text"
                            name="borrower"
                            id="borrower"
                            value={book.borrower}
                            onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="borrowdate">Borrow Date</Label>
                        <Input
                            type="date"
                            name="borrowdate"
                            id="borrowdate"
                            value={book.borrowdate}
                            onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="quantity">Quantity</Label>
                        <Input
                            type="number"
                            name="quantity"
                            id="quantity"
                            value={book.quantity}
                            onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="price">Price</Label>
                        <Input
                            type="number"
                            name="price"
                            id="price"
                            value={book.price}
                            onChange={handleChange} />
                    </FormGroup>
                    <Button color="primary" type="submit">Update Book</Button>
                </Form>
                <ToastContainer />
                </MainLayout>
            </Container> 
    );
};

export default UpdateBook;
