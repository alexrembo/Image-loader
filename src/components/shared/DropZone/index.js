import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { saveLoadedImage } from './helpers'
import * as types from 'constants/actionTypes'
import CSSModules from 'react-css-modules'
import styles from './index.pcss'

class DropZone extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    usersList: PropTypes.array.isRequired
  }
  onDragEnter() {
    event.stopPropagation()
    event.preventDefault()
  }
  onDragOver(event) {
    event.stopPropagation()
    event.preventDefault()
  }
  onDrop(event) {
    event.stopPropagation()
    event.preventDefault()
    const { dispatch, usersList } = this.props
    const { files } = event.dataTransfer
    saveLoadedImage(files, dispatch, types, usersList)
  }
  loadImagesOnClick() {
    const { dispatch, usersList } = this.props
    const files = this.refs.uploadInput.files
    saveLoadedImage(files, dispatch, types, usersList)
  }
  render() {
    return (
      <div styleName="main">
        <input 
          type="file"
          ref="uploadInput"
          multiple
          onChange={ ::this.loadImagesOnClick }
          onDragEnter={ e => ::this.onDragEnter(e) }
          onDragOver={ e => ::this.onDragOver(e) }
          onDrop={ e => ::this.onDrop(e) }
          styleName="output"
        />
        <div styleName="title">
          <div>
            DropZone
          </div>
          <div>
            Click or Drop Images
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    usersList: state.users.usersList
  }
}

export default connect(mapStateToProps)(CSSModules(DropZone, styles))
