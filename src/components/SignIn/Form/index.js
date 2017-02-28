import React, { Component, PropTypes } from 'react'
import * as types from 'constants/actionTypes'
import CSSModules from 'react-css-modules'
import styles from './index.pcss'

class Form extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }
  constructor (props) {
    super(props)
    this.state = {
      userEmail: '',
      userPassword: ''
    }
  }
  handleSubmit(e) {
    e.preventDefault()
    const userLogin = e.target.elements[0].value.trim()
    const userPassword = e.target.elements[1].value.trim()
    this.props.dispatch({
      type: types.SIGN_IN_USER,
      payload: {
        userLogin,
        userPassword
      }
    })
    this.setState({ userEmail: '', userPassword: '' })
  }  
  changeUserEmail(userEmail) {
    this.setState({ userEmail: userEmail.target.value }) 
  }
  changeUserPassword(userPassword) {
    this.setState({ userPassword: userPassword.target.value }) 
  }
  render() {
    const { userEmail, userPassword } = this.state
    return (
      <div styleName="wrapper">
        <div styleName="root">
          <div styleName="content">
            <div styleName="header">
              Sign in with your Account
            </div>
            <div styleName="form">
              <form 
                className='form-inline' 
                role='form'
                onSubmit={ ::this.handleSubmit }
              >
                <div styleName="inputs-row">
                  <input 
                    className='form-control'
                    type='text'
                    value={ userEmail }  
                    placeholder='Enter your email'
                    onChange={ ::this.changeUserEmail }
                  >
                  </input>
                  <input 
                    className='form-control'
                    type='text'
                    value={ userPassword }  
                    placeholder='Enter your password'
                    onChange={ ::this.changeUserPassword }
                  >
                  </input>
                </div> 
                <button 
                  className='btn button-save'
                  type='submit'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(Form, styles)
