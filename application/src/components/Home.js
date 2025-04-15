import React from 'react';
import './Home.css';

import { Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';  // Import Link for navigation

const Home = () => {
    return (
        <div className="page-container">
            <Container className="text-center">
             <h1 className="display-3" style={{ fontFamily: "'Georgia', sans-serif", fontWeight: 'bold',  marginTop: '50px' }}>
                    T1 Library Management System
                </h1>
                <p className="display-7" style={{ fontFamily: "'Bauhaus', cursive", fontSize: '1.25rem' }}>
                    Efficiently manage your books at any level!
                </p>
                <div className="content-wrapper">
                <img
                    src="https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?cs=srgb&dl=pexels-ivo-rainha-527110-1290141.jpg&fm=jpg"
                    alt="Library Logo"
                    style={{ width: '500px', height: 'auto' }}
                /> 
                <Link to="/login">
                    <Button color="primary" block className="mt-3">Login</Button>
                </Link>
                </div>
            </Container>
        </div>
    );
};

export default Home;
