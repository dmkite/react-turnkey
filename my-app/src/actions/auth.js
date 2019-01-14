import {request} from '../utils/request'

export const SET_AUTHENTICATION = 'SET_AUTHENTICATION'
export function setAuthentication(claim){
    return {
        type:SET_AUTHENTICATION,
        payload:claim
    }
}

export const LOG_IN = 'LOG_IN'
export function logIn(payload){
    return {
            type: LOG_IN,
            payload
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
    return{
            type: SIGN_UP,
            payload
        }
        
}

export const EDIT_PROFILE = 'EDIT_PROFILE'
export function editProfile(payload){
    try{
        return async dispatch => {
            const response = await request(`${process.env.REACT_APP_BASE_URL}/users/edit`, 'post', payload) //need to write route to edit profile
            dispatch({
             type: EDIT_PROFILE,
             payload: response.data   
            })
        }
    }catch(err){
        console.error(err)
    }
}