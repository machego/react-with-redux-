import { combineReducers } from 'redux'
import accountReducer from './accountRecuder';

const reducers = combineReducers({
    account: accountReducer
})

export default reducers 