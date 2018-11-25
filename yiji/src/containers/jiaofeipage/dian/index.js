import React, { Component } from 'react'
import DianComponent from '../../../component/jiaofeicomponent/dian'

import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"

class Dian extends Component {
  render(){
    return(
      <div>
        <DianComponent cityName={ this.props.city.cityName }/>
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

export default withRouter(connect(
  mapStateToProps
)(Dian))
