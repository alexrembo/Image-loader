import React, { Component, PropTypes } from 'react'
import * as types from 'constants/actionTypes'
import CSSModules from 'react-css-modules'
import styles from './index.pcss'

class Table extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    imagesList: PropTypes.array.isRequired,
    showImagePreviewModal: PropTypes.func.isRequired
  }
  deleteImage(id) {
    this.props.dispatch({
      type: types.DELETE_SELECTED_IMAGE,
      payload: id
    })
  }
  render() {
    const { showImagePreviewModal, imagesList } = this.props
    return (
      <div styleName="wrapper">
        <div styleName="root">
         <table styleName="table">
          <thead>
            <tr>
              <td styleName="id">
                ID
              </td>
              <td styleName="name">
                Image Name
              </td>
              <td styleName="user">
                Uploaded User
              </td>
              <td styleName="checksum">
                Checksum
              </td>
              <td styleName="events">
                Events
              </td>
            </tr>
          </thead>
          <tbody>
            {
              imagesList && imagesList.map((item, index) => (
                item &&
                <tr key={ index }>
                  <td styleName="id">
                    { item.id }
                  </td>
                  <td styleName="name">
                    { item.imageName }
                  </td>
                  <td styleName="user">
                    { item.uploadedUser }
                  </td>
                  <td styleName="checksum">
                    { item.checksum }
                  </td>
                  <td styleName="events">
                    <div styleName="view-btn">
                      <button
                        className='btn'
                        type='submit'
                        onClick={ () => showImagePreviewModal(item.id) } 
                      >
                        View
                      </button>
                    </div>
                    <div styleName="delete-btn">
                      <button 
                        className='btn'
                        type='submit' 
                        onClick={ () => ::this.deleteImage(item.id) }
                      >
                        Delete
                    </button>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
         </table>
        </div>
      </div>
    )
  }
}

export default CSSModules(Table, styles)
