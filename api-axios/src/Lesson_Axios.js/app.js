import React from 'react'
import Axios from 'axios'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataKu: []
        }
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log(res)
                this.setState({ dataKu: res.data })
            })
            .catch((err) => console.log(err))
    }

    render() {
        const data = this.state.dataKu.map((item, index) => {
            var id_title = [item.id, item.title].join(" - ");
            return <li key={index}>{id_title}</li>;
        })

        console.log(this.state.dataKu)
        return (
            <div>
                <h1>Hello Axios</h1>
                {data}
            </div>
        )
    }
}

export default App
