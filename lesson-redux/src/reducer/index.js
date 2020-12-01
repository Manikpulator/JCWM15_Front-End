// import combineReducers from redux
import { combineReducers } from 'redux'

// import reducer
import userReducer from './userReducer'

// combine all reducer
const allReducers = combineReducers({
    user: userReducer
})

export default allReducers