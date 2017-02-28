import React, { Component, PropTypes } from 'react'
import * as types from 'constants/actionTypes'
import Base from 'components/shared/Modal/Base'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import styles from './index.pcss'

class ImagePreview extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    imagesList: PropTypes.array.isRequired
  }
  onHide() {
    this.props.dispatch({
      type: types.HIDE_MODAL
    })
  }
  render() {
    const { id, imagesList } = this.props
    return (
      <Base onHide={ ::this.onHide }>
        <div styleName="wrapper">
          <div styleName="header">
            Image Preview Modal
          </div>
          {
            imagesList.map((item, index) => (
              item.id === id &&
              <div 
                styleName="image" 
                key={ index }
              >
                <img 
                  src={ item.dataURL } 
                  alt={ item.imageName } 
                />
              </div>
            ))
          }
          <div styleName="close-btn">
            <button 
              className='btn'
              type='submit' 
              onClick={ ::this.onHide }
            >
              Close
            </button>
          </div>
        </div>
      </Base>
    )
  }
}

function mapStateToProps (state) {
  return { 
    id: state.modal.id,
    imagesList: state.images.imagesList
  }
}

export default connect(mapStateToProps)(CSSModules(ImagePreview, styles, { allowMultiple: true }))