import { LOG_IN, LOG_OUT, SIGN_UP } from '../actions/auth'

const initialState  = {
    pending: false,
    user: null
}

export default function auth(state=initialState, {type, payload}){
    switch(type){
        case LOG_IN:
            return 'will replace with new state'
        case LOG_OUT:
            return initialState
        case SIGN_UP:
            return 'will replace with different state'
        default:
            return state
    }
}