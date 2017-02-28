import React, { Component, PropTypes } from 'react'
import TableView from 'components/TableView'
import { connect } from 'react-redux'

class TableViewPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    imagesList: PropTypes.array.isRequired
  }
  render() {
    const { dispatch, imagesList } = this.props
    return (
      <TableView 
        dispatch={ dispatch } 
        imagesList={ imagesList }
      />
    )
  }
}

function mapStateToProps (state) {
  return state.images
}

export default connect(mapStateToProps)(TableViewPage)
