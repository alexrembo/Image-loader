import React, { Component, PropTypes } from 'react'
import Header from 'components/shared/Header'
import Main from 'components/shared/Modal/Main'
import Table from './Table'
import * as types from 'constants/actionTypes'
import Footer from 'components/shared/Footer'
import CSSModules from 'react-css-modules'
import styles from './index.pcss'

class TableView extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    imagesList: PropTypes.array.isRequired
  }
  showImagePreviewModal(id) {
    this.props.dispatch({
      type: types.SHOW_MODAL,
      payload: { 
        component: "ImagePreview",
        id: id 
      }
    })
  }
  render() {
    const { dispatch, imagesList } = this.props
    return (
      <div>
        <Header />
        <Table 
          showImagePreviewModal={ ::this.showImagePreviewModal }
          dispatch={ dispatch }
          imagesList={ imagesList }
        />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default CSSModules(TableView, styles)
