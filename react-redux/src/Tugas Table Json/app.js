import React from 'react'
import Axios from 'axios'
import {
    Table,
    Button,
    Form
} from 'react-bootstrap'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dbUsers: []
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:2000/tablejson')
            .then((res) => {
                console.log(res.data)
                this.setState({ dbUsers: res.data })
            })
            .catch((err) => console.log(err))
    }

    tableHead = () => {
        return (
            <thead>
                <tr>
                    <th>#</th>
                    <th>First_Name</th>
                    <th>Last_Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
        )
    }

    tableBody = () => {
        let { dbUsers } = this.state
        return (
            <tbody>
                {dbUsers.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>
                                <Button>Edit</Button>
                                <Button>Delete</Button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        )
    }

    tableInput = () => {
        return (
            <tbody>
                <tr>
                    <td>#</td>
                    <td>
                        <Form.Control type="text" placeholder="Enter First Name" ref="firstname" />
                    </td>
                    <td>
                        <Form.Control type="text" placeholder="Enter Last Name" ref="lastname" />
                    </td>
                    <td>
                        <Form.Control type="text" placeholder="Enter Email" ref="email" />
                    </td>
                    <td>
                        <Button onClick={this.handleAdd} >SUBMIT</Button>
                    </td>
                </tr>
            </tbody>
        )
    }

    table = () => {
        return(
            <Table>
                {this.tableHead()}
                {this.tableBody()}
                {this.tableInput()}
            </Table>
        )
    }

    handleAdd = () => {
        let first_name = this.refs.firstname.value
        let last_name = this.refs.lastname.value
        let email = this.refs.email.value
        console.log(first_name, last_name, email)
        Axios.post('http://localhost:2000/users', {
            first_name,
            last_name,
            email
        })
        .then((res) => {
            console.log(res.data)
            Axios.get('http://localhost:2000/users')
            .then((res) => {
                console.log(res.data)
                this.setState({ dbUsers: res.data })
            })
            .catch((err) => console.log(err))
        })
        .catch((err) => console.log(err))
    }

    render() {
        console.log(this.state.dbUsers)
        console.log(this)
        return (
            <div>
                <h1>Table JSON</h1>
                {this.table()}
            </div>
        )
    }
}

export default App