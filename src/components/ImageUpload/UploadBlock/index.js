import React, { Component, PropTypes } from 'react'
import { isAuthorized } from 'utils/helpers'
import { browserHistory } from 'react-router'
import DropZone from 'components/shared/DropZone'
import * as types from 'constants/actionTypes'
import CSSModules from 'react-css-modules'
import styles from './index.pcss'

class UploadBlock extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    imagesPreviewList: PropTypes.array,
    usersList: PropTypes.array.isRequired
  }
  componentWillUnmount() {
    this.props.dispatch({
      type: types.DELETE_ALL_PREVIEW_IMAGES
    })
  }
  deleteImage(id) {
    this.props.dispatch({
      type: types.DELETE_SELECTED_PREVIEW_IMAGE,
      payload: id
    })
  }
  saveImagesToStore() {
    const { usersList } = this.props
    if(!isAuthorized(usersList)) {
      browserHistory.push('/sign-in')
    } else {
      this.props.dispatch({
        type: types.SAVE_IMAGES_TO_STORE
      })
    }
  }
  clearAllPreviewImages() {
    this.props.dispatch({
      type: types.DELETE_ALL_PREVIEW_IMAGES
    })
  }
  render() {
    const { imagesPreviewList } = this.props
    return (
      <div styleName="wrapper">
        <div styleName="root">
          <div styleName="main">
            <div styleName="header">
              Upload Image
            </div>
            <div styleName="content">
              <div styleName="drop-zone">
                <DropZone />
              </div>
              <div styleName="images">
                {
                  imagesPreviewList && imagesPreviewList.map((item, index) => (
                    <div key={ index }> 
                      <div styleName="image">
                        <div 
                          styleName="delete-circle"
                          onClick={ () => ::this.deleteImage(item.id) }
                        >
                          <div styleName="cross" />
                        </div>
                        <div>
                          <img 
                            src={ item.dataURL } 
                            alt={ item.imageName }
                          />
                        </div>
                      </div>
                      <div styleName="image-info">
                        <div>
                          { item.imageName }
                        </div>
                        <div>
                          { Math.round(item.fileSize / 1000) } kB
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div styleName="buttons">
              <div styleName="clear-btn">
                <button 
                  className='btn'
                  onClick={ ::this.clearAllPreviewImages }
                >
                  Clear All
                </button>
              </div>
              <div styleName="save-btn">
                <button 
                  className='btn'
                  onClick={ ::this.saveImagesToStore }
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(UploadBlock, styles)
