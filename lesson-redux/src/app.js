import React from 'react'
import Axios from 'axios'

// import connect react-redux
import { connect } from 'react-redux'

// import component
import Navigation from './components/navbar'

// import dari react router dom
import { Switch, Route } from 'react-router-dom'

// import page
import Content1 from './page/content1'
import Content2 from './page/content2'
import Home from './page/home'
import Login from './page/login'
import Register from './page/register'
import NotFound from './page/404NotFound'

// import action login
import { login } from './action'

class App extends React.Component {
    // keep login
    componentDidMount(){
        Axios.get(`http://localhost:2000/users?username=${localStorage.username}`)
        .then((res) => this.props.login(res.data[0]))
        .catch((err) => console.log(err))
    }

    render() {
        return (
            <div>
                <Navigation />
                <Switch>
                    <Route path='/' component={Home} exact />
                    <Route path='/content1' component={Content1} />
                    <Route path='/content2' component={Content2} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <Route path='*' component={NotFound} />
                </Switch>
            </div>
        )
    }
}

export default connect(null, { login }) (App)
