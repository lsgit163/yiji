import React, { Component } from 'react'
import './style.less'
import { Link } from 'react-router-dom'

export default class ShopConent extends Component {

  render(){
    var item = this.props.data;
    var id = item.id;
    return(
          <div className="list-item">
            <Link to={ `/detail/${id}` }>
              <img src={ item.img } alt=""/>
              <div className="mask">
                <div className="left">
                  <p>{ item.title }</p>
                  <p>{ item.houseType }</p>
                </div>
                <div className="right">
                  <div className="btn">
                    { item.rentType }
                  </div>
                  <p>{ item.price }/月</p>
                </div>
              </div>
            </Link>
          </div>
    )
  }
}
