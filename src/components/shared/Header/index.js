import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import * as types from 'constants/actionTypes'
import { isAuthorized } from 'utils/helpers'
import { connect } from 'react-redux'
import classNames from 'classnames'
import CSSModules from 'react-css-modules'
import styles from './styles.pcss'

class Header extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    usersList: PropTypes.array.isRequired,
    routing: PropTypes.string.isRequired
  }
  signOutUser() {
    this.props.dispatch({
      type: types.SIGN_OUT_USER
    })
    this.props.dispatch({
      type: types.DELETE_ALL_IMAGES
    })
  }
  render() {
    const { routing, usersList } = this.props
    return (
      <div styleName="wrapper">
        <div styleName="root">
          <div styleName="content">
            <div styleName="menu">
              <div styleName={ classNames("sub-head", { active: routing === '/table-view' }) }>
                <Link to="/table-view">
                  Table View
                </Link>
              </div>
              <div styleName={ classNames("sub-head", { active: routing === '/blocks-view' }) }>
                <Link to="/blocks-view">
                  Blocks View
                </Link>
              </div>
              <div styleName={ classNames("sub-head", { active: routing === '/image-upload' }) }>
                <Link to="/image-upload">
                  Image Upload
                </Link>
              </div>
              <div styleName={ classNames("sub-head", { active: routing === '/sign-in' }, 
                { isAuthorized: isAuthorized(usersList) }
              ) }>
                <Link to="/sign-in">
                  Sign In
                </Link>
              </div>
              <div styleName={ classNames("sub-head", { isAuthorized: !isAuthorized(usersList) }) }>
                <Link 
                  onClick={ ::this.signOutUser }
                  to="/sign-in"
                >
                  Sign Out
                </Link>
              </div>
            </div>
            <div styleName="logo">
              <Link to="/blocks-view">
                IMAGES STORAGE
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    routing: state.routing.locationBeforeTransitions.pathname,
    usersList: state.users.usersList
  }
}

export default connect(mapStateToProps)(CSSModules(Header, styles, { allowMultiple: true }))