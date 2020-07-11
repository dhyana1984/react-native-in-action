//Root Reducer，创建全局state
//结合应用程序中所有reducer来创建一个全局store(state对象)

import { combineReducers } from 'redux'
import bookReducer from './bookReducer'

//创建一个包含所有reducer的root reducer
export default rootReducer = combineReducers({
    bookReducer
})