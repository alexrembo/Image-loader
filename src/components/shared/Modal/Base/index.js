import React, { Component, PropTypes } from 'react'
import cssModules from 'react-css-modules'
import styles from './index.pcss'

class Base extends Component {
  static propTypes = {
    onHide: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired
  }
  render() {
    const { onHide, children } = this.props
    return (
      <div styleName="modal">
        <div 
          onClick={ onHide } 
          styleName="backdrop" 
        />
        <div styleName="wrapper">
          <div styleName="window">
            <div styleName="context">
              { children }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default cssModules(Base, styles, { allowMultiple: true })