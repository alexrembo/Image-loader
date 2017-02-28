import React, { Component, PropTypes } from 'react'
import ImageUpload from 'components/ImageUpload'
import { connect } from 'react-redux'

class ImageUploadPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    imagesPreviewList: PropTypes.array,
    usersList: PropTypes.array.isRequired
  }
  render() {
    const { dispatch, imagesPreviewList, usersList } = this.props
    return (
      <ImageUpload 
        usersList={ usersList }
        imagesPreviewList={ imagesPreviewList }
        dispatch={ dispatch }
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    imagesPreviewList: state.images.imagesPreviewList,
    usersList: state.users.usersList
  }
}

export default connect(mapStateToProps)(ImageUploadPage)
