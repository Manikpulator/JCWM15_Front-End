import React from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { login } from '../actions'

import {
    Table,
    Button,
    Image,
    Form,
    Modal
} from 'react-bootstrap'

class CartPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: null,
            newQty: 0,
            reqPayment: false,
            total: 0,
            reqPass: false,
            errPass: false
        }
    }

    handleDelete = (index) => {
        // console.log(index)
        let tempCart = this.props.cart

        // syntax splice untuk menghapus
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

    handleMinus = () => {
        if (this.state.newQty <= 0) return

        this.setState({ newQty: this.state.newQty - 1 })
    }

    changeQty = (e) => {
        this.setState({ newQty: e.target.value })
    }

    handleDone = (index) => {
        // mengganti data pesanan suatu produk berdasarkan index
        // tempProduct adalah tempat penyimpanan sementara data product yang ingin diedit
        let tempProduct = this.props.cart[index]

        // mengganti data cart untuk product yang ingin diganti
        tempProduct.qty = parseInt(this.state.newQty)
        tempProduct.total = this.state.newQty * this.props.cart[index].price
        console.log(tempProduct)

        // memasukan object pesanan product yang baru, ke dalam array cart yang lama
        // tempCart adalah tempat penampungan sementara data cart user yang lama
        let tempCart = this.props.cart

        // syntax splice untuk mereplace
        tempCart.splice(index, 1, tempProduct)
        console.log(tempCart)

        // mengirim perubahan ke database json
        Axios.patch(`http://localhost:2000/users/${localStorage.id}`, { cart: tempCart })
            .then((res) => {
                console.log(res.data)

                // update data di redux
                Axios.get(`http://localhost:2000/users/${localStorage.id}`)
                    .then((res) => {
                        this.props.login(res.data)
                        this.setState({ selectedIndex: null })
                    })
                    .catch((err) => console.log(err))
            })
            .catch((err) => console.log(err))
    }

    totalPrice = () => {
        let counter = 0
        this.props.cart.map(item => counter += item.total)
        // console.log(counter)
        return counter
    }

    confPayment = () => {
        let nominal = this.refs.payment.value
        console.log(nominal)
        this.setState({ reqPayment: false })
    }

    confPass = () => {
        let pass = this.refs.pass.value
        console.log(pass)
        if (pass !== this.props.pass) return this.setState({ errPass: true })

        this.setState({ reqPayment: true, reqPass: false})
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
                                <td style={{ textAlign: "center" }}>IDR {item.price.toLocaleString()}</td>
                                <td style={{}}>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Button onClick={this.handleMinus}>
                                            <i className="fas fa-minus"></i>
                                        </Button>
                                        <Form.Control style={{ width: '100px' }} onChange={(e) => this.changeQty(e)} value={this.state.newQty} min={0} />
                                        <Button onClick={() => this.setState({ newQty: parseInt(this.state.newQty) + 1 })}>
                                            <i className="fas fa-plus"></i>
                                        </Button>
                                    </div>
                                </td>
                                <td style={{ textAlign: "center" }}>IDR {(this.state.newQty * item.price).toLocaleString()}</td>
                                <td style={{ textAlign: "center" }}>
                                    <Button variant='success' onClick={() => this.handleDone(index)} style={{ marginRight: '15px' }}>Done</Button>
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
                            <td style={{ textAlign: "center" }}>IDR {item.price.toLocaleString()}</td>
                            <td style={{ textAlign: "center" }}>{item.qty}</td>
                            <td style={{ textAlign: "center" }}>IDR {item.total.toLocaleString()}</td>
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
        const { reqPayment, reqPass, errPass } = this.state
        if (!this.props.id) return <Redirect to='/login' />

        // console.log(this.props.cart)
        // console.log(this.state.selectedIndex)
        // console.log(this.state.newQty)

        return (
            <div style={{ marginTop: '70px', padding: '0 15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h1>Ini Cart Page</h1>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Button onClick={() => this.setState({ reqPass: true })} variant="success">Checkout</Button>
                    </div>
                </div>
                <Table striped bordered hover variant="dark">
                    {this.renderTHead()}
                    {this.renderTBody()}
                </Table>
                <h1 style={{ textAlign: 'right' }}>Total: IDR {this.totalPrice().toLocaleString()}</h1>
                <Modal show={reqPayment} onHide={() => this.setState({ reqPayment: false })}>
                    <Modal.Header closeButton>
                        <Modal.Title>Payment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Control ref="payment" type="number" placeholder="Tolong Masukan Jumlah Uang Untuk Pembayaran:" />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.setState({ reqPayment: false })}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.confPayment} >
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={reqPass} onHide={() => this.setState({ reqPass: false })}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Control ref="pass" placeholder="Tolong Masukan Password Untuk Melanjutkan Pembayaran:" />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.setState({ reqPass: false })}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.confPass} >
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={errPass} onHide={() => this.setState({ errPass: false })}>
                    <Modal.Header closeButton>
                        <Modal.Title>Error!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Wrong Password</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.setState({ errPass: false })}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.user.cart,
        id: state.user.id,
        pass: state.user.password
    }
}

export default connect(mapStateToProps, { login })(CartPage)