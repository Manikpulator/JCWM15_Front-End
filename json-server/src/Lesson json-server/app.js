import React from 'react'
import Axios from 'axios'
import {
    Button
} from 'react-bootstrap'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dbUsers: []
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:2000/users')
            .then((res) => {
                console.log(res.data)
                this.setState({ dbUsers: res.data })
            })
            .catch((err) => console.log(err))
    }

    handlePost = () => {
        // console.log('ini post')
        Axios.post('http://localhost:2000/users', {
            first_name: 'Rakha',
            last_name: 'Adhi',
            email: 'rakhaa34@gmail.com'
        })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }

    handleDelete = () => {
        Axios.delete('http://localhost:2000/users/2')
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }

    handleEdit = () => {
        Axios.put('http://localhost:2000/users/4', {
            first_name: 'Anjas',
            last_name: 'Hardiansyah',
            email: 'anjash@yahoo.com'
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
    }

    render() {
        console.log(this.state.dbUsers)
        return (
            <div>
                <h1>Hello JSON-SERVER</h1>
                <Button onClick={this.handlePost} >POST</Button>
                <Button onClick={this.handleDelete} >DELETE</Button>
                <Button onClick={this.handleEdit} >EDIT</Button>
            </div>
        )
    }
}

export default App

// untuk mengubah object menjadi json memakai JSON.stringify(nama/var object yang mau diubah)
// sebaliknya, dari json ke object memakai JSON.parse(nama/var object yang mau diubah)