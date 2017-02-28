import { USERS_BASE_FILE_URL } from '../constants/constants'
import * as types from 'constants/actionTypes'

export const getUsersList = (dispatch) => {
  fetch(USERS_BASE_FILE_URL)
    .then(response => response.json())
    .then(users => {
      dispatch({
        type: types.GET_USERS_LIST,
        payload: users
      })
    })
}