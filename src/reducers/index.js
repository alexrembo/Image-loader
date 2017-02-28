import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import modal from './modal'
import images from './images'
import users from './users'

export default combineReducers({
  routing: routerReducer,
  images,
  modal,
  users
})