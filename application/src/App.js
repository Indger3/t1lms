import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import Book from './components/Book';
import UpdateBook from './components/UpdateBook';
import Header from './components/Header';
import AddBook from './components/AddBook';
import About from './components/About';

function App() {

  const btn = () => {
    toast("Succesfully Clicked");
  };
  return (
    
    <div className="App-header">
      <ToastContainer />
      
      <Router>
      
            <Routes>
                <Route path="/" element={<Home />} />  {/* Use element for route components */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/books" element={<Book />} />
                <Route path="/update-book/:bookId" element={<UpdateBook />} />
                <Route path="/add-book" element={<AddBook />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
        
        
        
    </div>
    
  );
}

export default App;
