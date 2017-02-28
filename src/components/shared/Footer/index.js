import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router'
import * as types from 'constants/actionTypes'
import { connect } from 'react-redux'
import { isAuthorized } from 'utils/helpers'
import CSSModules from 'react-css-modules'
import styles from './styles.pcss'

class Footer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    usersList: PropTypes.array.isRequired
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
    const { usersList } = this.props
    return (
      <div styleName="wrapper">
        <div styleName="root">
          <div styleName="content">
            <div styleName="menu-info">
              <div styleName="sub-head">
                <Link to="/table-view">
                  Table View
                </Link>
              </div>
              <div styleName="sub-head">
                <Link to="/blocks-view">
                  Blocks View
                </Link>
              </div>
              <div styleName="sub-head">
                <Link to="/image-upload">
                  Image Upload
                </Link>
              </div>
              <div styleName={ classNames("sub-head", { isAuthorized: isAuthorized(usersList) }) }>
                <Link to="/sign-in">
                  Sign In
                </Link>
              </div>
              <div 
                styleName={ classNames("sub-head", { isAuthorized: !isAuthorized(usersList) }) }
                onClick={ ::this.signOutUser }
              >
                <Link to="/sign-in">
                  Sign Out
                </Link>
              </div>
            </div>
            <div styleName="menu-description">
              <div styleName="col">
                <span styleName="logo">IMAGES STORAGE </span>
                <span styleName="copyright">©2017 | PRIVACY POLICY</span>
              </div>
              <div styleName="col">
                <span styleName="address">Ukraine, Kyiv</span>
                <span styleName="founder" >Founder: Alex Puskov</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    usersList: state.users.usersList
  }
}

export default connect(mapStateToProps)(CSSModules(Footer, styles, { allowMultiple: true }))