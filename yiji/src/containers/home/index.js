import React, { Component } from 'react'
import HomeHeader from '../../component/home/home_header/index.js'
import HomeBanner from '../../component/home/home_banner/index.js'
import banner1 from '../../static/images/banner1.png'
import banner2 from '../../static/images/banner2.png'
import banner3 from '../../static/images/banner3.png'
import HomeData from './subdata'
import FooterNav from '../../component/home/home_footer'

import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import * as cityActions from "../../redux/actions"
import { withRouter } from "react-router-dom"

const images = [banner1,banner2,banner3]
class Home extends Component {
  render(){
    return(
      <div>
        <HomeHeader cityName={ this.props.city }/>
        <HomeBanner data = { images }/>
        <HomeData />
        <FooterNav />
      </div>
    )
  }
}

// ----------- redux ---------------
function mapStateToProps(state) {
    return {
      city:state.city
    }
}

function mapDispatchToProps(dispatch) {
    return {
        cityActions: bindActionCreators(cityActions, dispatch),
    }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home))
