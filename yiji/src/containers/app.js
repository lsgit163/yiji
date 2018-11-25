import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import * as cityActions from "../redux/actions"
import { withRouter } from "react-router-dom"
import * as locaMethod from "../utils/index.js"
import * as Key from "../utils/key.js"

class App extends Component {
  // 处理城市初始化信息
  componentDidMount(){
    // 城市是否被存储
    let cityName = locaMethod.getDefaultCity(Key.LOCAL_CITY);
    if(!cityName){
      cityName = "北京"; // 定位拿到
      locaMethod.setupDefaultCity(cityName);
    }
    // 写入到redux
    this.props.cityActions.update({
      cityName:cityName
    })
  }

  render(){
    return(
      <div>
        { this.props.children }
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
)(App))
