import React from 'react'
import { Route, Switch } from 'react-router-dom'

// import component
import Navigation from './components/navigation'

// import page
import Home from './pages/home'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'

class App extends React.Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Switch>
                    <Route path='/' component={Home} exact/>
                    <Route path='/login' component={LoginPage} />
                    <Route path='/register' component={RegisterPage} />
                </Switch>
            </div>
        )
    }
}

export default App