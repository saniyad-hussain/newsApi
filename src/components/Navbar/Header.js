import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="primary">
            <Navbar.Brand href="#home">Online News</Navbar.Brand>
                <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;