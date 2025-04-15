// LoginPage.js
import React, { useState } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Header from './Header';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/auth/login', { username, password });
            if (response.status === 200) {
                toast("Login successful:", response.data);
                // Save JWT token or session details here if necessary
                // localStorage.setItem('token', response.data.token);
                // Redirect to home page after successful login
                navigate('/books');
            } else {
                setErrorMessage('Invalid username or password');
            }
            // Redirect to home page or save JWT token (if using JWT)
        
        
        } catch (error) {
            console.error('Error during login:', error);
            setErrorMessage('Invalid username or password');
        }
    };

    return (
        
        <Container>

           
            <h2 className="text-center mb-4 mt-4">Login to T1 Library</h2>
            <Form onSubmit={handleSubmit} className="p-4 border shadow rounded">
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </FormGroup>
                {errorMessage && <Alert color="danger">{errorMessage}</Alert>}
                <Button color="primary" type="submit" block>Login</Button>
            </Form>
        </Container>
    );
};

export default LoginPage;
