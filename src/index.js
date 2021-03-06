import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { routes } from './routes'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'

const store = configureStore()

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={ store }>
  <Router history={ history } routes={ routes } />
  </Provider>,
  document.getElementById('root')
)