import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import App from '../containers/app.js'
import SubRouter from './subrouter.js'

export default class AppRouter extends Component {
  render(){
    return(
      <BrowserRouter>
        <App>
          <Route path='/' component={ SubRouter }></Route>
        </App>
      </BrowserRouter>
    )
  }
}
