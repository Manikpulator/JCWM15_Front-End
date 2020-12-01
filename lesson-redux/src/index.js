// import module
import React from 'react'
import ReactDOM from 'react-dom'

// import App
import App from './app'

// import style
import 'bootstrap/dist/css/bootstrap.min.css';

// import BrowserRouter
import { BrowserRouter } from 'react-router-dom'

// import create store
import { createStore } from 'redux'

// import provider
import { Provider } from 'react-redux'

// import combined reducers
import allReducers from './reducer'

// make variabel for createStore
const globalState = createStore(allReducers)

// subscribe variabel globalState for console log redux each time we call the react
globalState.subscribe(() => console.log("Global State : ", globalState.getState()))

ReactDOM.render(
    <Provider store={globalState}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)