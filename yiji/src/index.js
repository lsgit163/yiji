import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/common.less'
import './static/css/font.css'
import './static/css/iconfont.css'
import './static/fontsize_server/iconfont.css'

import AppRouter from './router/approuter'

import configureStore from "./redux/store/configureStore.js"
import { Provider } from "react-redux"

const store = configureStore();
class App extends React.Component{
  render(){
    return(
      <div>
      <AppRouter />
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
   document.getElementById('root'));
