import React, { Component } from 'react'
import OrderUi from '../../../component/shopingcar/usercomment'
import { shoppingOrder } from '../../../fetch/shoppingcar/order.js'

export default class Order extends Component {

  constructor() {
    super();
    this.state = {
      data:[]
    }
  }

  componentDidMount() {
    let username = this.props.username;
    var result = shoppingOrder(username);
    this.reHttp(result);
  }

  reHttp(result){
    result.then(res => {
      return res.json()
    })
    .then(data => {
      this.setState({
        data:data
      })
    })
  }

  render(){
    return(
      <div>
        {
          this.state.data.length > 0
          ?<OrderUi res={ this.state.data }/>
          :<div>正在加载...</div>
        }
      </div>
    )
  }
}
