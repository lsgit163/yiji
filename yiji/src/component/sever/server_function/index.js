import React, { Component } from 'react'
import './style.less'
import { Link } from 'react-router-dom'

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
      <div className='box'>
        <h1>生活缴费</h1>
        <ul className='functions'>
          <li>
            <p><i className="icon iconfont">&#xe615;</i><span>水费</span></p>
          </li>
          <li>
            <p><i className="icon iconfont">&#xe6e7;</i><span>电费</span></p>
          </li>
          <li>
            <p><i className="icon iconfont">&#xe670;</i><span>宽带</span></p>
          </li>

          <li>
            <Link to='money'>
              <p><i className="icon iconfont">&#xe614;</i><span>更多</span></p>
            </Link>
          </li>

        </ul>
      </div>
    )
  }
}
