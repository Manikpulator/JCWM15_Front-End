import React from 'react'
import {
    Button,
    InputGroup,
    Form,
    FormControl
} from 'react-bootstrap'

class RegisterPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible1: false,
            visible2: false,
            userValidErr: [false, ""],
            emailValidErr: [false, ""]
        }
    }

    userValid = (e) => {
        // console.log(e)
        let username = e.target.value
        // console.log(username)
        let symb = /[!@#$%^&*;]/

        if (symb.test(username) || username.length < 6) return this.setState({ userValidErr: [true, "*Can\'t include symbol and min 6 char"] })

        this.setState({userValidErr: [false, ""]})
    }

    emailValid = (e) => {
        let email = e.target.value
        console.log(email)
        let regex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!regex.test(email)) return this.setState({emailValidErr: [true, "*Email not valid"]})

        this.setState({emailValidErr: [false, ""]})
    }

    render() {
        const { visible1, visible2, userValidErr, emailValidErr } = this.state
        return (
            <div style={styles.container}>
                <div style={styles.center}>
                    <div>
                        <h1>Register</h1>
                    </div>
                    <div style={{ ...styles.item, textAlign: 'center' }}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1" style={{ width: "45px", display: 'flex', justifyContent: 'center' }}>
                                    <i className="fas fa-user-circle"></i>
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                style={{ height: "45px" }}
                                ref="username"
                                onChange={(e) => this.userValid(e)}
                            />
                        </InputGroup>
                        <Form.Text className="mb-3" style={{ textAlign: "left", color: "red", fontSize: '10px' }}>
                            {userValidErr[1]}
                        </Form.Text>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1" style={{ width: "45px", display: 'flex', justifyContent: 'center' }}>
                                    <i className="fas fa-envelope" />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Email"
                                aria-label="Email"
                                aria-describedby="basic-addon1"
                                style={{ height: "45px" }}
                                ref="email"
                                onChange={(e) => this.emailValid(e)}
                            />
                        </InputGroup>
                        <Form.Text className="mb-3" style={{ textAlign: "left", color: "red", fontSize: '10px' }}>
                            {emailValidErr[1]}
                        </Form.Text>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend style={{ cursor: 'pointer' }}
                                onClick={() => this.setState({ visible1: !visible1 })}>
                                <InputGroup.Text id="basic-addon1" style={{ width: "45px", display: 'flex', justifyContent: 'center' }}>
                                    <i className={visible1 ? "fas fa-eye" : "fas fa-eye-slash"}></i>
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Password"
                                aria-label="Password"
                                aria-describedby="basic-addon1"
                                style={{ height: "45px" }}
                                type={visible1 ? "text" : "password"}
                                ref="password"
                            // onChange={(e) => this.emailValid(e)}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend style={{ cursor: 'pointer' }}
                                onClick={() => this.setState({ visible2: !visible2 })}>
                                <InputGroup.Text id="basic-addon1" style={{ width: "45px", display: 'flex', justifyContent: 'center' }}>
                                    <i className={visible2 ? "fas fa-eye" : "fas fa-eye-slash"}></i>
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Confirm Password"
                                aria-label="Password"
                                aria-describedby="basic-addon1"
                                style={{ height: "45px" }}
                                type={visible2 ? "text" : "password"}
                                ref="confpassword"
                            // onChange={(e) => this.emailValid(e)}
                            />
                        </InputGroup>
                        <Button>
                            Register <i className="fas fa-eye-slash" style={{ marginLeft: '15px' }}></i>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        background: "url(https://images.unsplash.com/photo-1506544777-64cfbe1142df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80) no-repeat center",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        height: "100vh",
    },
    center: {
        marginTop: 100,
        padding: "10px 30px",
        width: 350,
        height: "68vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid gray",
        borderRadius: "30px",
        backgroundColor: "rgba(255, 255, 255, .7)"
    },
    item: {
        width: "100%",
        height: "auto",
        marginBottom: 15,
    }
}

export default RegisterPage