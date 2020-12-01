import React from 'react'

// import component
import Navigation from './components/navbar'

// import dari react router dom
import { Switch, Route } from 'react-router-dom'

// import page
import Content1 from './page/content1'
import Content2 from './page/content2'
import Home from './page/home'
import Login from './page/login'
import NotFound from './page/404NotFound'


class App extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
        //         user: 'Orang Asing'
    //     }
    // }

    render() {
        return (
            <div>
                <Navigation />
                <Switch>
                    <Route path='/' component={Home} exact />
                    <Route path='/content1' component={Content1} />
                    <Route path='/content2' component={Content2} />
                    <Route path='/Login' component={Login} />
                    <Route path='*' component={NotFound} />
                </Switch>
            </div>
        )
    }
}

export default App
