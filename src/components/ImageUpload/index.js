import React, { Component, PropTypes } from 'react'
import Header from 'components/shared/Header'
import UploadBlock from './UploadBlock'
import Footer from 'components/shared/Footer'
import CSSModules from 'react-css-modules'
import styles from './index.pcss'

class ImageUpload extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    imagesPreviewList: PropTypes.array,
    usersList: PropTypes.array.isRequired
  }
  render() {
    const { dispatch, imagesPreviewList, usersList } = this.props
    return (
      <div>
        <Header />
        <UploadBlock 
          usersList={ usersList }
          imagesPreviewList={ imagesPreviewList }
          dispatch={ dispatch } 
        />
        <Footer />
      </div>
    )
  }
}

export default CSSModules(ImageUpload, styles)
