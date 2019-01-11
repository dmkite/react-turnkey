import {createStore, combineReducers, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import auth from './reducers/auth'
const reducers = combineReducers({auth})

export default createStore(reducers, applyMiddleware(logger, thunk))