import {createStore, combineReducers, applyMiddleware} from 'redux'

import auth from './reducers/auth'
const reducers = combineReducers({auth})

export default createStore(reducers)