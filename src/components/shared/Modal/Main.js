import { Component, createElement, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as Modal from './index'
class Main extends Component {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    component: PropTypes.any,
    payload: PropTypes.object.isRequired
  }
  render() {
    const { show, component, payload } = this.props
    if (!show) {
      return null
    }
    return createElement(Modal[component], payload)
  }
}

function mapStateToProps(state) {
  return state.modal
}
export default connect(mapStateToProps)(Main)