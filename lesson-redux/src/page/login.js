import React from 'react'
import Axios from 'axios'

import {
    Button,
    Form
} from 'react-bootstrap'

// import Redirect
import { Redirect } from 'react-router-dom'

// import connect
import { connect } from 'react-redux'

// import action
import { login } from '../action'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    handleLogin = () => {
        let username = this.refs.username.value
        let password = this.refs.password.value
        console.log(username, password)

        if (!username || !password) return alert('Please input all form')

        Axios.get(`http://localhost:2000/users?username=${username}&password=${password}`)
            .then((res) => {
                console.log(res.data)

                if (res.data.length === 0) return alert('Invalid Username or Password')

                this.props.login(res.data[0])
                // localStorage.setItem('username', username)
                localStorage.username = username
            })
            .catch((err) => console.log(err))
    }

    render() {
        if (this.props.username) return <Redirect to='/' />
        return (
            <div style={styles.container}>
                <h1>Login</h1>
                <Form.Control ref="username" style={styles.item} type="text" placeholder="Enter Username" />
                <Form.Control ref="password" style={styles.item} type="password" placeholder="Enter Password" />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={this.handleLogin} variant='primary'>Login</Button>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        margin: '80px auto',
        width: '300px',
        height: '300px',
        backgroundColor: 'lightblue',
        padding: '10px',
        borderRadius: '15px'
    },
    item: {
        margin: '15px 0'
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.user.username
    }
}

export default connect(mapStateToProps, { login })(Login)