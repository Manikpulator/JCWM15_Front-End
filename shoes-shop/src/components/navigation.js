import React from 'react'
import { Link } from 'react-router-dom'
import {
    Navbar,
    Nav,
    Image,
    Dropdown
} from 'react-bootstrap'

// import logo
import { LOGO } from '../assets'

class Navigation extends React.Component {
    render() {
        return (
            <Navbar expand="lg" style={{ height: '70px', backgroundColor: '#303f9f' }}>
                <Navbar.Brand>
                    <Image src={LOGO.default} alt='logo' style={{ height: '50px', marginRight: '15px' }} />
                    <strong style={{ color: 'white' }}>Shoes Shop</strong>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to='/' style={{ color: 'white' }}>Home</Nav.Link>
                    </Nav>
                    <Dropdown style={{ marginRight: '40px' }}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Username
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to='/login' >Login</Dropdown.Item>
                            <Dropdown.Item as={Link} to='/register' >Register</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation