import React from 'react'
import {
    Navbar,
    Nav,
    Dropdown
} from 'react-bootstrap'

// import connect
import { connect } from 'react-redux'

// import link react route dom
import { Link } from 'react-router-dom'

// import action logout
import { logout } from '../action'

class Navigation extends React.Component {
    handleLogout = () => {
        this.props.logout()
        localStorage.removeItem('username')
    }

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
                            {this.props.username ? this.props.username : 'Username'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {this.props.username
                                ?
                                <Dropdown.Item onClick={this.handleLogout}>Logout</Dropdown.Item>
                                :
                                <>
                                    <Dropdown.Item as={Link} to='/login' >Login</Dropdown.Item>
                                    <Dropdown.Item>Register</Dropdown.Item>
                                </>
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.user.username
    }
}

export default connect(mapStateToProps, { logout })(Navigation)