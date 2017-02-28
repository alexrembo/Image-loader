import { 
  getRandomValue, 
  getUserId, 
  isAuthorized
} from 'utils/helpers'
import sha256 from 'js-sha256'

export const saveLoadedImage = (files, dispatch, types, usersList) => {
  const userId = isAuthorized(usersList) ? getUserId(usersList) : ''
  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader()
    reader.onload = (e) => {
      dispatch({
        type: types.SAVE_PREVIEW_IMAGE_INFO,
        payload: {
          id: getRandomValue(0, 10000),
          imageName: files[i].name,
          fileSize: files[i].size,
          checksum: sha256(
            getRandomValue(0, 10000) + files[i].name + 
            files[i].size + e.target.result + 1
          ),
          uploadedUser: userId,
          dataURL: e.target.result
        }
      })
    }
    reader.readAsDataURL(files[i])
  }
}