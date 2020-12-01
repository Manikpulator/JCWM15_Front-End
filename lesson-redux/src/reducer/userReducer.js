// make initial state
const INITIAL_STATE = {
    username: '',
    email: '',
    password: ''
}

// make reducer for user
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'LOG_IN' :
            return {
                ...state,
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password
            }
        case 'LOG_OUT' :
            return INITIAL_STATE
        default :
            return state
    }
}

export default userReducer