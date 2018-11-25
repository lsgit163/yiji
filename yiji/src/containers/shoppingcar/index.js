import React, { Component } from 'react'
import CarHeader from '../../component/city/city_header'
import CarUserInfo from '../../component/shopingcar/userinfo'
import Order from './sublist'

import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"

class ShoppingCar extends Component {

  constructor(){
    super();
    this.state = {
      isLogined:false
    }
  }

  componentDidMount() {
    if(this.isChecked()) {
      // 登录了
      this.setState({
        isLogined:true
      })
    }else{
      //未登录
      this.setState({
        isLogined:false
      })
      this.props.history.push(`/login/${encodeURIComponent('car')}`)
    }
  }

  isChecked() {
    if(this.props.userinfo.username) {
      return true
    }
    return false;
  }

  render(){
    return(
      <div>
        <CarHeader title='购物车' history={ this.props.history } router='/home'/>
        <CarUserInfo username={ this.props.userinfo.username } city={ this.props.city.cityname }/>
        <Order username={ this.props.userinfo.username }/>
      </div>
    )
  }
}

// ----------- redux ---------------
function mapStateToProps(state) {
    return {
      userinfo:state.userinfo,
      city:state.city
    }
}

export default withRouter(connect(
  mapStateToProps
)(ShoppingCar))
