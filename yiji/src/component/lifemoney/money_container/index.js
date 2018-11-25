import React, { Component } from 'react'
import './style.less'
import { Link } from 'react-router-dom'

export default class MoneyContainer extends Component {

  render(){
    return(
      <div>
      <div className='box-container'>
        <div className="money_header">
          <span className='header-left'>新增缴费</span>
          <Link to='/city'>
            <span className='header-right'><i className="icon iconfont">&#xe633;</i>城市</span>
          </Link>
        </div>
        <ul className='functions'>
            <li>
              <Link to='/warter'><p><i className="icon iconfont">&#xe615;</i><span>水费</span></p></Link>
            </li>
            <li>
              <Link to='/dian'><p><i className="icon iconfont">&#xe6e7;</i><span>电费</span></p></Link>
            </li>
            <li>
                <Link to='/wang'><p><i className="icon iconfont">&#xe670;</i><span>宽带</span></p></Link>
            </li>
        </ul>
        <ul className='functions'>

            <li>
              <Link to='/warter'><p><i className="icon iconfont">&#xe615;</i><span>水费</span></p></Link>
            </li>


            <li>
              <Link to='/dian'><p><i className="icon iconfont">&#xe6e7;</i><span>电费</span></p></Link>
            </li>


            <li>
              <Link to='/wang'><p><i className="icon iconfont">&#xe670;</i><span>宽带</span></p></Link>
            </li>

        </ul>
        </div>
        <div className='money-fotter'>
          <span>缴费代扣<i>|</i></span>
          <span>户号管理<i>|</i></span>
          <span>帮助中心</span>
        </div>
      </div>
    )
  }
}
