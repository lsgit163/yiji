import React, { Component } from 'react'
import ShopConent from './subconent'

export default class ShopListUi extends Component {

  render(){
    var data = this.props.data;
    return(
      <div>
        {
          data.map(function(element,index) {
            return <ShopConent key={ index } data={ element } />
          })
        }
      </div>
    )
  }
}
