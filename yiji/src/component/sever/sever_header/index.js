import React, { Component } from 'react'
import './style.less'

export default class CityHeader extends Component {


  clickBack(){
    let router = this.props.router;
    if(router) {
      this.props.history.push(router)
    }else{
      window.history.back();
    }

  }

  render(){
    return(
      <div>
          <div id="common-header">
            <span className="dingwei" onClick={this.clickBack.bind(this)}>
              <i className="icon iconfont">&#xe633;</i>
            </span>
            <h1>{ this.props.title }</h1>
            <span className="msg" onClick={this.clickBack.bind(this)}>
              <i className="icon iconfont">&#xe644;</i>
            </span>
          </div>
      </div>
    )
  }
}
