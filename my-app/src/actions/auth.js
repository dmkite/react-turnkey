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
    console.log('payload from action ', payload)
    return {
        type: SIGN_UP,
        payload
    }
}