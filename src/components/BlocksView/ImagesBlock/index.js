import React, { Component, PropTypes } from 'react'
import * as types from 'constants/actionTypes'
import CSSModules from 'react-css-modules'
import styles from './index.pcss'

class ImagesBlock extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    imagesList: PropTypes.array.isRequired
  }
  deleteImage(id) {
    this.props.dispatch({
      type: types.DELETE_SELECTED_IMAGE,
      payload: id
    })
  }
  render() {
    const { imagesList } = this.props
    return (
      <div styleName="wrapper">
        <div styleName="root">
          <div styleName="main">
            {
              imagesList.map((item, index) => (
                <div styleName="image" key={ index }>
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
                  <div styleName="container">
                    <div styleName="head">
                      <div>
                        Image name
                      </div>
                      <div>
                        Uploaded user
                      </div>
                      <div>
                        size
                      </div>
                      <div>
                        checksum
                      </div>
                    </div>
                    <div>
                      <div>
                        { item.imageName }
                      </div>
                      <div>
                        { item.uploadedUser }
                      </div>
                      <div>
                        { Math.round(item.fileSize / 1000) } kB
                      </div>
                      <div styleName="checksum">
                        { item.checksum }
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(ImagesBlock, styles)
