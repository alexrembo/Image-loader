import React, { Component, PropTypes } from 'react'
import SignIn from 'components/SignIn'
import { connect } from 'react-redux'

class SignInPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    usersList: PropTypes.array.isRequired
  }
  render() {
    const { dispatch, usersList } = this.props
    return (
      <SignIn 
        dispatch={ dispatch }
        usersList={ usersList } 
      />
    )
  }
}

function mapStateToProps (state) {
  return state.users
}

export default connect(mapStateToProps)(SignInPage)
