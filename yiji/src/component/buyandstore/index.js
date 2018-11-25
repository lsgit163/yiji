import React, { Component } from 'react'
import './style.less'

export default class Details extends Component {


  byClickHandle(){
    var buyHandle = this.props.buyHandle;
    buyHandle();
  }

  storeHandle(){
    var storeHandle = this.props.storeHandle;
    storeHandle();
  }

  render(){
    var data = this.props.data;
    var id = this.props.id;
    return(
      <div className="buy-store-container clear-fix">
          <div className="item-container float-left">
            <button className="o" onClick={ this.storeHandle.bind(this) }>收藏</button>
          </div>
          <div className="item-container float-right">
            <button onClick={ this.byClickHandle.bind(this) }>预定</button>
          </div>
      </div>
    )
  }
}
