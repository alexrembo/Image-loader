import React, { Component, PropTypes } from 'react'
import Header from 'components/shared/Header'
import ImagesBlock from './ImagesBlock'
import Footer from 'components/shared/Footer'
import CSSModules from 'react-css-modules'
import styles from './index.pcss'

class BlocksView extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    imagesList: PropTypes.array.isRequired
  }
  render() {
    const { imagesList, dispatch } = this.props
    return (
      <div>
        <Header />
        <ImagesBlock 
          imagesList={ imagesList }
          dispatch={ dispatch }
        />
        <Footer />
      </div>
    )
  }
}

export default CSSModules(BlocksView, styles)
