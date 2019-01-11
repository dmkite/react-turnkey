import { SET_AUTHENTICATION, LOG_IN, LOG_OUT, SIGN_UP } from '../actions/auth'

const initialState  = {
    pending: false,
    user: null,
    error: null,
    success: null
}

export default function auth(state=initialState, {type, payload}){
    switch(type){
        case SET_AUTHENTICATION:
            if (payload.response && payload.response.data && payload.response.data.message) {
                if (payload.response.data.message === "Couldn't find it, bruh") return state
                return { ...state, error: payload.response.data.message }
            }
            return {pending: false, user: payload, error: null, success: null}
        case LOG_IN:
            if(payload.response && payload.response.data && payload.response.data.message){
                return {...state, error: payload.response.data.message}
            }
            localStorage.setItem('token', payload.token)
            return {...state, user:payload.user}
        case LOG_OUT:
            return initialState
        case SIGN_UP:
            if (payload.response && payload.response.data && payload.response.data.message) {
                return { ...state, success: null, error: payload.response.data.message }
            }        
            return {...state, error: null, success: payload.message}
        default:
            return state
    }
}