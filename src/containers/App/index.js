import React, { Component, PropTypes } from 'react'
import { getUsersList } from 'utils/api'
import { connect } from 'react-redux'
import './index.pcss'

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired
  }
  componentWillMount() {
    const { dispatch } = this.props
    getUsersList(dispatch)
  }
  render() {
    const { children } = this.props
    return (
      <div>
        { children } 
      </div>
    )
  }
}

export default connect()(App)

