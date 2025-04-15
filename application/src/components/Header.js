import React from 'react';
import { Button, Container, Nav, NavItem, NavLink, Navbar } from 'reactstrap';

function Header() {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                backgroundColor: '#343a40',
                color: '#fff',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                height: '150px', // Explicitly set header height
            }}
        >
            <Container
                className="text-center"
                style={{
                    padding: '10px 0',
                }}
            >
                <h1
                    className="display-3"
                    style={{
                        fontFamily: "'Georgia', sans-serif",
                        fontWeight: 'bold',
                        margin: 0,
                    }}
                >
                    T1 Library Management System
                </h1>
                <p
                    style={{
                        fontFamily: "'Bauhaus', cursive",
                        fontSize: '1.25rem',
                        margin: 0,
                        
                    }}
                >
                    Efficiently manage your books at any level!
                </p>
            </Container>

            <div>
                <img
                    src="https://t4.ftcdn.net/jpg/06/09/85/83/360_F_609858308_6simQX8hQX5SCKNlJkX0iIeAMxf1PjmJ.jpg"
                    alt="Library Banner"
                    style={{
                        width: '100%',
                        height: '100px',
                        objectFit: 'cover',
                    }}
                />
            </div>

            <Navbar
                expand="md"
                style={{
                    backgroundColor: '#23272b',
                    padding: '10px 0',
                }}>
<Nav
pills
                 style={{
     display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                    }}
                >
                    <NavItem>
                        <NavLink href="/" style={{ color: '#fff' }}>
                            <Button>Logout</Button>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/books" style={{ color: '#fff' }}>
                            All Books
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/add-book" style={{ color: '#fff' }}>
                            Add Book
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about" style={{ color: '#fff' }}>
                            About Us
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Header;
