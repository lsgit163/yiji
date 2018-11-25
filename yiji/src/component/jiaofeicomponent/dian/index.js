import React, { Component } from 'react'
import JiaoFeiHeader from '../header'

export default class Dian extends Component {
  render() {
    return(
      <div>
        <JiaoFeiHeader title='新增缴费用户' cityName={ this.props.cityName }/>
      </div>
    )
  }
}
