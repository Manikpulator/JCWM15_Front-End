import React from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'

import {
    Accordion,
    Table,
    Image,
    Card
} from 'react-bootstrap'

// import action
import { getHistory } from '../actions'

class HistoryPage extends React.Component {
    componentDidMount() {
        Axios.get(`http://localhost:2000/history?username=${this.props.username}`)
            .then((res) => {
                console.log(res.data)
                this.props.getHistory(res.data)
            })
            .catch((err) => console.log(err))
    }

    // renderTHead = () => {
    //     return (
    //         <thead style={{ textAlign: 'center' }}>
    //             <tr>
    //                 <td>#</td>
    //                 <td>Username</td>
    //                 <td>Date</td>
    //                 <td>Total</td>
    //             </tr>
    //         </thead>
    //     )
    // }

    renderTBody = () => {
        return (
            <Accordion>
                {this.props.history.map((item, index) => {
                    return (
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey={index + 1}>
                                Date: {item.date}, Total Purchasing: IDR {item.total.toLocaleString()}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={index + 1}>
                                <Table striped bordered hover variant="dark">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Image</th>
                                            <th>Price</th>
                                            <th>Size</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {item.product.map((item2, index2) => {
                                            return (
                                                <tr>
                                                    <td>{index2 + 1}</td>
                                                    <td>{item2.name}</td>
                                                    <td>
                                                        <Image src={item2.image} style={{ height: 100, width: 100 }} rounded />
                                                    </td>
                                                    <td>IDR {item2.price.toLocaleString()}</td>
                                                    <td>{item2.size}</td>
                                                    <td>{item2.qty}</td>
                                                    <td>IDR {item2.total.toLocaleString()}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>
                            </Accordion.Collapse>
                        </Card>
                    )
                })}
            </Accordion>
        )
    }

    render() {
        console.log(this.props.history)
        return (
            <div style={{ marginTop: '70px', padding: '0 20px' }}>
                <h1>History Transaction</h1>
                {/* <Table striped bordered hover variant="dark"> */}
                {/* {this.renderTHead()} */}
                {this.renderTBody()}
                {/* </Table> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        history: state.history,
        username: state.user.username
    }
}

export default connect(mapStateToProps, { getHistory })(HistoryPage)