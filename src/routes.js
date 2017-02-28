import React from 'react'
import App from './containers/App'
import BlocksViewPage from './containers/BlocksViewPage'
import ImageUploadPage from './containers/ImageUploadPage'
import TableViewPage from './containers/TableViewPage'
import SignInPage from './containers/SignInPage'
import { IndexRedirect, Route } from 'react-router'

export const routes = (
  <Route path='/' component={ App }>
    <IndexRedirect to="sign-in" />
    <Route path="sign-in" component={ SignInPage } />
    <Route path='blocks-view' component={ BlocksViewPage } />
    <Route path='table-view' component={ TableViewPage } />
    <Route path='image-upload' component={ ImageUploadPage } />
  </Route>
)

