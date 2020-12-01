import React from 'react'
import Axios from 'axios'
import {
    Card,
    Button,
    DropdownButton,
    Dropdown
} from 'react-bootstrap'

let URL = 'http://newsapi.org/v2/top-headlines?country=id&apiKey='
let KEY = 'fbbbc3d3c42b46c4ac7be648a268cf2c'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: [],
            country: [
                "Argentina",
                "Australia",
                "Austria",
                "Belgium",
                "Brazil",
                "Bulgaria",
                "Canada",
                "China",
                "Colombia",
                "Cuba",
                "Czech Republic",
                "Egypt",
                "French",
                "Germany",
                "Greece",
                "Hong Kong",
                "Hungary",
                "India",
                "Indonesia",
                "Ireland",
                "Israel",
                "Italy",
                "Japan",
                "Latvia",
                "Lithuania",
                "Malaysia",
                "Mexico",
                "Morocco",
                "Netherlands",
                "New Zealand",
                "Nigeria",
                "Norway",
                "Philippines",
                "Poland",
                "Portugal",
                "Romania",
                "Russia",
                "Saudi Arabia",
                "Serbia",
                "Singapore",
                "Slovakia",
                "Slovenia",
                "South Africa",
                "South Korea",
                "Sweden",
                "Switzerland",
                "Taiwan",
                "Thailand",
                "Turkey",
                "UAE",
                "Ukraine",
                "United Kingdom",
                "United States",
                "Venuzuela",
            ],
            cate: [
                "Business",
                "Entertainment",
                "Health",
                "Science",
                "Sports",
                "Technology",
            ],
            linkList: [
                "http://newsapi.org/v2/top-headlines?country=ar&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=au&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=at&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=be&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=br&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=bg&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=ca&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=cn&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=co&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=cu&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=cz&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=eg&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=fr&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=de&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=gr&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=hk&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=hu&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=in&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=id&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=ie&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=il&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=it&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=jp&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=lv&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=lt&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=my&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=mx&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=ma&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=nl&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=nz&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=ng&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=no&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=ph&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=pl&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=pt&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=ro&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=ru&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=sa&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=rs&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=sg&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=sk&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=si&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=za&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=kr&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=se&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=ch&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=tw&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=th&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=tr&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=ae&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=ua&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=gb&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=us&apiKey=",
                "http://newsapi.org/v2/top-headlines?country=ve&apiKey=",
            ],
            cateLink: [
                "&category=business",
                "&category=entertainment",
                "&category=health",
                "&category=science",
                "&category=sports",
                "&category=technology",
            ],
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

    changeCountry = (index) => {
        URL = this.state.linkList[index]
        Axios.get(URL + KEY)
        .then((res) => this.setState({ news: res.data.articles }))
        .catch((err) => console.log(err))
    }

    changeCate = (index) => {
        let newURL = URL.slice(0, 46) + this.state.cateLink[index] + URL.slice(46, URL.length)
        Axios.get(newURL + KEY)
        .then((res) => this.setState({ news: res.data.articles}))
        .catch((err) => console.log(err))
    }

    dropdownCountry = () => {
        return (
            <DropdownButton title="Country" >
                <div style={{ overflow: 'scroll', height: '250px' }}>
                    {this.state.country.map((item, index) => {
                        return (
                            <Dropdown.Item key={index} onClick={() => this.changeCountry(index)}>
                                {item}
                            </Dropdown.Item>
                        )
                    })}
                </div>
            </DropdownButton>
        )
    }

    dropdownCate = () => {
        return (
            <DropdownButton title="Category">
                <div>
                    {this.state.cate.map((item, index) => {
                        return (
                            <Dropdown.Item key={index} onClick={() => this.changeCate(index)}>
                                {item}
                            </Dropdown.Item>
                        )
                    })}
                </div>
            </DropdownButton>
        )
    }

    showCard = () => {
        return this.state.news.map((item, index) => {
            return (
                <Card key={index} style={{ width: '18rem', marginRight: '15px' }}>
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
                <div style={{ display: 'flex' }}>
                    <h1>NEWS API</h1>
                    <div>{this.dropdownCountry()}</div>
                    <div>{this.dropdownCate()}</div>
                </div>
                <div style={{ display: "flex", flexWrap: 'wrap' }}>
                    {this.showCard()}
                </div>
            </div>
        )
    }
}

export default App