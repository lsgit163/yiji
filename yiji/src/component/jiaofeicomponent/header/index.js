import React, { Component } from 'react'
import './style.less'

export default class JiaoFeiHeader extends Component {

  clickBack(){

  }

  render() {
    return(
      <div>
        <div className='money-box'>
          <span className='money-back' onClick={this.clickBack.bind(this)}>
            <i className="icon-chevron-left"></i>
              { this.props.title }
          </span>
          <span className='money-city'>{ this.props.cityName }</span>
        </div>
        <div className='server-type'>
            <span className><i className='icon iconfont'>&#xe6e7;</i>电费</span>
        </div>
      </div>
    )
  }
}
