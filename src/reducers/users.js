import * as types from 'constants/actionTypes'
import R from 'ramda'

const initialState = {
  usersList: []
}

export default function users(state = initialState, action = {}) {
  const { type } = action
  switch (type) {
    case types.GET_USERS_LIST:
      return {
        usersList: action.payload.users
      }
    case types.SIGN_IN_USER:
      return {
        usersList: state.usersList.map(items => (
          R.merge(items, { 
            isSelected: action.payload.userLogin.toLowerCase() === items.email &&
              action.payload.userPassword.toLowerCase() === items.password
          })
        ))
      }
    case types.SIGN_OUT_USER:
      return {
        usersList: state.usersList.map(items => (
          R.merge(items, { isSelected: false })
        ))
      }
    default:
      return state
  }
}