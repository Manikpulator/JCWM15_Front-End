import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
    Navbar,
    Nav,
    Image,
    Dropdown
} from 'react-bootstrap'

// import action logout
import { logout } from '../actions'

// import logo
import { LOGO } from '../assets'

class Navigation extends React.Component {
    handleLogout = () => {
        localStorage.removeItem('id')
        this.props.logout()
    }

    render() {
        return (
            <Navbar expand="lg" fixed='top' style={{ height: '70px', backgroundColor: 'rgba(43, 104, 213, .7)' }}>
                <Navbar.Brand>
                    <Image src={LOGO.default} alt='logo' style={{ height: '50px', marginRight: '15px' }} />
                    <strong style={{ color: 'white', fontSize: '30px' }}>Shoes Shop</strong>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to='/' style={{ color: 'white' }}>Home</Nav.Link>
                    </Nav>
                    <Dropdown style={{ marginRight: '40px' }}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {this.props.username || "username"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {this.props.username
                                ?
                                <Dropdown.Item onClick={this.handleLogout}>Logout</Dropdown.Item>
                                :
                                <>
                                    <Dropdown.Item as={Link} to='/login' >Login</Dropdown.Item>
                                    <Dropdown.Item as={Link} to='/register' >Register</Dropdown.Item>
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