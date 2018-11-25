import React, { Component } from 'react'
import CityHeader from '../../component/city/city_header'
import CityContent from '../../component/city/city_content'
import CitySelect from '../../component/city/city_select'

import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import * as cityActions from "../../redux/actions"
import { withRouter } from "react-router-dom"
import * as locaMethod from "../../utils/index.js"

class City extends Component {

  nameFn(cityName){

        // 添加redux管理状态
        this.props.cityActions.update({
          cityName:cityName
        })
        // 修改local的数据
        locaMethod.setupDefaultCity(cityName);
  }

  render(){

    return(
      <div>
        <CityHeader title='城市选择'/>
        <CityContent cityName= { this.props.city.cityName }/>
        <CitySelect nameFn={ this.nameFn.bind(this) }/>
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
)(City))
