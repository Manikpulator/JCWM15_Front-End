import React from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'

import { login } from '../actions'

import {
    Table,
    Button,
    Image,
    Form
} from 'react-bootstrap'

class CartPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: null,
            newQty: 0
        }
    }

    handleDelete = (index) => {
        // console.log(index)
        let tempCart = this.props.cart
        tempCart.splice(index, 1)
        console.log(tempCart)

        Axios.patch(`http://localhost:2000/users/${localStorage.id}`, { cart: tempCart })
            .then((res) => {
                console.log(res.data)

                Axios.get(`http://localhost:2000/users/${localStorage.id}`)
                    .then((res) => this.props.login(res.data))
                    .catch((err) => console.log(err))
            })
            .catch((err) => console.log(err))
    }

    handleDone = () => {
        console.log('handle done')
    }

    renderTHead = () => {
        return (
            <thead style={{ textAlign: "center" }}>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Size</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
            </thead>
        )
    }

    renderTBody = () => {
        return (
            <tbody>
                {this.props.cart.map((item, index) => {
                    if (this.state.selectedIndex === index) {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td style={{ textAlign: "center" }}>
                                    <Image style={{ width: 100, height: 100 }} src={item.image} rounded />
                                </td>
                                <td style={{ textAlign: "center" }}>{item.size}</td>
                                <td style={{ textAlign: "center" }}>{item.price}</td>
                                <td style={{ textAlign: "center", display: 'flex' }}>
                                    <Button>-</Button>
                                    <Form.Control style={{width: '50px'}} placeholder={this.state.newQty} />
                                    <Button>+</Button>
                                </td>
                                <td style={{ textAlign: "center" }}>{item.total}</td>
                                <td style={{ textAlign: "center" }}>
                                    <Button variant='success' onClick={this.handleDone} style={{ marginRight: '15px' }}>Done</Button>
                                    <Button variant='danger' onClick={() => this.setState({ selectedIndex: null })}>Cancel</Button>
                                </td>
                            </tr>
                        )
                    }
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td style={{ textAlign: "center" }}>
                                <Image style={{ width: 100, height: 100 }} src={item.image} rounded />
                            </td>
                            <td style={{ textAlign: "center" }}>{item.size}</td>
                            <td style={{ textAlign: "center" }}>{item.price}</td>
                            <td style={{ textAlign: "center" }}>{item.qty}</td>
                            <td style={{ textAlign: "center" }}>{item.total}</td>
                            <td style={{ textAlign: "center" }}>
                                <Button variant='warning' onClick={() => this.setState({ selectedIndex: index, newQty: item.qty })} style={{ marginRight: '15px' }}>Edit</Button>
                                <Button variant='danger' onClick={() => this.handleDelete(index)}>Delete</Button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        )
    }

    render() {
        // console.log(this.props.cart)
        console.log(this.state.selectedIndex)
        return (
            <div style={{ marginTop: '70px', padding: '0 15px' }}>
                <h1>Ini Cart Page</h1>
                <Table striped bordered hover variant="dark">
                    {this.renderTHead()}
                    {this.renderTBody()}
                </Table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.user.cart
    }
}

export default connect(mapStateToProps, { login })(CartPage)