import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'


const Header = ({heading}) => {
    return (

    <header className='mb-5'>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect fixed='top'>
        <Container fluid >
            <Navbar.Brand href="#home">{heading}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <NavDropdown title="More" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
    </Navbar>
    </header>
    )
}

export default Header
