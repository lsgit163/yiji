import React, { Component } from 'react'
import MoneyHeader from '../../component/lifemoney/money_header'
import MoneyContainer from '../../component/lifemoney/money_container'

export default class LifeMoney extends Component {
  render(){
    return(
      <div>
        <MoneyHeader title='生活缴费' router='/life' history={ this.props.history }/>
        <MoneyContainer />
      </div>
    )
  }
}
