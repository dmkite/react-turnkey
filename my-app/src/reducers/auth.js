import { LOG_IN, LOG_OUT, SIGN_UP } from '../actions/auth'

const initialState  = {
    pending: false,
    user: null,
    error: null,
    success: null
}

export default function auth(state=initialState, {type, payload}){
    switch(type){
        case LOG_IN:
            if(payload.response && payload.response.data && payload.response.data.message){
                return {...state, error: payload.response.data.message}
            }
            return state
        case LOG_OUT:
            return initialState
        case SIGN_UP:
            if (payload.response && payload.response.data && payload.response.data.message) {
                return { ...state, error: payload.response.data.message }
            }        
            return {...state, success: payload.message}
        default:
            return state
    }
}