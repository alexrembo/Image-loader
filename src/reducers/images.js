import * as types from 'constants/actionTypes'
import { REHYDRATE } from 'redux-persist/constants'
import R from 'ramda'

const initialState = { 
  imagesPreviewList: [],
  imagesList: []
}

export default function images(state = initialState, action = {}) {
  const { type } = action
  switch (type) {
    case REHYDRATE: {
      if(!action.payload.images.imagesList) {
        return state 
      } else {
        return { 
          imagesList: action.payload.images.imagesList
        }
      }
    } 
    case types.SAVE_IMAGES_TO_STORE: {
      return {
        imagesList: state.imagesList.concat(state.imagesPreviewList)
      }
    }
    case types.DELETE_SELECTED_IMAGE: {
      return {
        imagesList: state.imagesList.filter(item =>
          item.id !== action.payload
        )
      }
    }
    case types.SAVE_PREVIEW_IMAGE_INFO: {
      return {
        imagesList: state.imagesList,
        imagesPreviewList: R.append(action.payload, state.imagesPreviewList)
      }
    }
    case types.DELETE_SELECTED_PREVIEW_IMAGE: {
      return {
        imagesList: state.imagesList,
        imagesPreviewList: state.imagesPreviewList.filter(item =>
          item.id !== action.payload
        )
      }
    }
    case types.DELETE_ALL_PREVIEW_IMAGES: {
      return {
        imagesList: state.imagesList,
        imagesPreviewList: []
      }
    }
    case types.DELETE_ALL_IMAGES: {
      return {
        imagesList: [],
        imagesPreviewList: []
      }
    }
    default:
      return state
  }
}