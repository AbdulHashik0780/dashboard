import authReducer from './authReducer'
import productReducer from './productReducer'

import { combineReducers } from 'redux'

const rootReducers = combineReducers({
  auth: authReducer,
  products: productReducer
})

export default rootReducers;