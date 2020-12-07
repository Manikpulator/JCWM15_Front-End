import React from 'react'
import Axios from 'axios'

import {
    Image
} from 'react-bootstrap'

class DetailProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        Axios.get(`http://localhost:2000/products${this.props.location.search}`)
            .then((res) => {
                console.log(res.data[0].images[1])
                this.setState({ data: res.data[0] })
            })
            .catch((err) => console.log(err))
    }

    render() {
        // const { data } = this.state
        console.log(this.state.data)
        console.log(this.state.data.images)
        // console.log(this.state.data.images[1])
        return (
            <div style={{ marginTop: '70px', padding: '0 20px', backgroundColor: 'lightgreen' }}>
                <h1>Ini Product Detail</h1>
                <div style={{ display: 'flex', backgroundColor: 'lightyellow', height: '50vh' }}>
                    <div style={{ display: 'flex', flexBasis: '40%', backgroundColor: 'lime' }}>
                        {/* <Image src={data.images[1]} rounded /> */}
                    </div>
                    <div style={{ display: 'flex', flexBasis: '60%', backgroundColor: 'salmon' }}>2</div>
                </div>
            </div>
        )
    }
}

export default DetailProduct