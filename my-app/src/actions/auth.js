import {request} from '../utils/request'

export const LOG_IN = 'LOG_IN'
export function logIn(payload){
    return async (dispatch) => {
        try{
        const response = await request(`${process.env.REACT_APP_BASE_URL}/auth/token`, 'post', payload)
        dispatch({
            type: LOG_IN,
            payload: response
        })
    }catch(err){
        console.log(err)
    }
    }
    
}

export const LOG_OUT = 'LOG_OUT'
export function logOut(){
    return {
        type: LOG_OUT
    }
}

export const SIGN_UP = 'SIGN_UP'
export function signup(payload){
    return async (dispatch) => {
        try{
        const response = await request(`${process.env.REACT_APP_BASE_URL}/users/signup`, 'post', payload)
        dispatch({
            type: SIGN_UP,
            payload: response
        })
        } catch(err){
            console.error(err)
        }
    }
}