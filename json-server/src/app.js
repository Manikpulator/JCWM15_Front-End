import React from 'react'
import Axios from 'axios'
import {
    Card,
    Button
} from 'react-bootstrap'

let URL = 'http://newsapi.org/v2/top-headlines?country=id&apiKey='
let KEY = 'fbbbc3d3c42b46c4ac7be648a268cf2c'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: []
        }
    }

    componentDidMount() {
        Axios.get(URL + KEY)
            .then((res) => {
                console.log(res)
                this.setState({ news: res.data.articles })
            })
            .catch((err) => console.log(err))
    }

    showCard = () => {
        return this.state.news.map((item, index) => {
            return (
                <Card style={{ width: '18rem', marginRight: '15px' }}>
                    <Card.Img variant="top" src={item.urlToImage} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Button href={item.url} variant="primary">Read More</Button>
                    </Card.Body>
                </Card>
            )
        })
    }

    render() {
        console.log(this.state.news)
        return (
            <div>
                <h1>NEWS API</h1>
                <div style={{ display: "flex", flexWrap: 'wrap' }}>
                    {this.showCard()}
                </div>
            </div>
        )
    }
}

export default App
