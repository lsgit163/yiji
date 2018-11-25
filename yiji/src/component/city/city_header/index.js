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
            <span className="back-icon" onClick={this.clickBack.bind(this)}>
              <i className="icon-chevron-left"></i>
            </span>
            <h1>{ this.props.title }</h1>
          </div>
      </div>
    )
  }
}
