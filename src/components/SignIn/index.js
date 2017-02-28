import React, { Component, PropTypes } from 'react'
import Header from 'components/shared/Header'
import Form from './Form'
import { isAuthorized } from 'utils/helpers'
import { browserHistory } from 'react-router'
import Footer from 'components/shared/Footer'
import CSSModules from 'react-css-modules'
import styles from './index.pcss'

class SignIn extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }
  componentWillReceiveProps(nextProps) {
    const usersList = nextProps.usersList
    if(isAuthorized(usersList)) {
      browserHistory.push('/blocks-view')
    }
  }
  render() {
    const { dispatch } = this.props
    return (
      <div>
        <Header />
        <Form dispatch={ dispatch } />
        <Footer />
      </div>
    )
  }
}

export default CSSModules(SignIn, styles)
