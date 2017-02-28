import React, { Component, PropTypes } from 'react'
import BlocksView from 'components/BlocksView'
import { connect } from 'react-redux'

class BlocksViewPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    imagesList: PropTypes.array.isRequired
  }
  render() {
    const { imagesList, dispatch } = this.props
    return (
      <BlocksView
        dispatch={ dispatch }
        imagesList={ imagesList } 
      />
    )
  }
}

function mapStateToProps (state) {
  return state.images
}

export default connect(mapStateToProps)(BlocksViewPage)
