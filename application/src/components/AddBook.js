import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const AddBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    buydate: '',
    borrower: '',
    borrowdate: '',
    quantity: '',
    price: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!book.title || !book.title || !book.author || !book.buydate || !book.quantity || !book.price || book.title == 0) {
      toast.error("All required fields must be filled!");
      return;
    }

    // Send the book data to the backend via POST request
    axios.post('http://localhost:8080/bookss', book)
    .then((response) => {
        toast.success("Book added successfully!", {
            onClose: () => navigate('/books'), // Navigate to /books after toast is closed
            autoClose: 3000, // Time in milliseconds (3 seconds)
        });
    })
      .catch((error) => {
        console.error('Error adding book:', error);
        toast.error("Error adding book");
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
    <><div>
          <Header style={{position:'fixed'}} />
          
    <div style={{ paddingTop: '300px' }}> {/* Adjust for header height */}</div>
      <hr></hr>
      </div><Container className="mt-5" >
              
              <h2 className="text-center">Add Book</h2>
              <Form onSubmit={handleSubmit}>
                  <FormGroup>
                      <Label for="title">Id</Label>
                      <Input
                          type="long"
                          name="id"
                          id="id"
                          value={book.id}
                          onChange={handleChange}
                          required />
                  </FormGroup>
                  <FormGroup>
                      <Label for="title">Title</Label>
                      <Input
                          type="text"
                          name="title"
                          id="title"
                          value={book.title}
                          onChange={handleChange}
                          required />
                  </FormGroup>
                  <FormGroup>
                      <Label for="author">Author</Label>
                      <Input
                          type="text"
                          name="author"
                          id="author"
                          value={book.author}
                          onChange={handleChange}
                          required />
                  </FormGroup>
                  <FormGroup>
                      <Label for="buydate">Buy Date</Label>
                      <Input
                          type="date"
                          name="buydate"
                          id="buydate"
                          value={book.buydate}
                          onChange={handleChange}
                          required />
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
                          onChange={handleChange}
                          required />
                  </FormGroup>
                  <FormGroup>
                      <Label for="price">Price</Label>
                      <Input
                          type="number"
                          name="price"
                          id="price"
                          value={book.price}
                          onChange={handleChange}
                          required />
                  </FormGroup>
                  <Button color="primary" type="submit">Add Book</Button>
              </Form>
              <ToastContainer />
          </Container></>
  );
};

export default AddBook;
