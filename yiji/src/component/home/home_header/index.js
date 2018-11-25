import React, { Component } from 'react'
import './style.less'
import SearchInput from '../../search/sub_input'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import * as cityActions from "../../../redux/actions"
import { withRouter } from "react-router-dom"

class HomeHeader extends Component {

  enterHandle(value){
    this.props.history.push('/search/'+encodeURIComponent(value))
  }

  render(){
    return(
      <div id="home-header" className="clear-fix">
        <div className="home-header-left float-left">
          <Link to='/city'>
            <span>{ this.props.city.cityName }</span>
            <i className="icon-angle-down"></i>
          </Link>
        </div>
        <div className="home-header-right float-right">
          <Link to='/car'><i className="iconfont icon-car"></i></Link>
        </div>
        <div className="home-header-middle">
          <div className="search-container">
            <i className="icon-search"></i>
            <SearchInput enterHandle={ this.enterHandle.bind(this) }/>
          </div>
        </div>
      </div>
    )
  }
}


// ----------- redux ---------------
function mapStateToProps(state) {
    return {
      city:state.city,
      userinfo:state.userinfo
    }
}


export default withRouter(connect(
  mapStateToProps
)(HomeHeader))
