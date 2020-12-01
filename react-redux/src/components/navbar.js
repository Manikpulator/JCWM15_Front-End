import React from 'react'
import {
    Navbar,
    Nav,
    Dropdown
} from 'react-bootstrap'

// import link react route dom
import { Link } from 'react-router-dom'

class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Link to='/' >Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/content1' >Content 1</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/content2' >Content 2</Link>
                        </Nav.Link>
                    </Nav>
                    <Dropdown style={{ marginRight: '40px' }}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Username
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to='/login' >Login</Dropdown.Item>
                            <Dropdown.Item>Register</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation