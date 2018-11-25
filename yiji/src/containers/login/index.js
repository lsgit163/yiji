import React, { Component } from 'react'
import LoginComponent from '../../component/login'

import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import * as userinfoActions from "../../redux/actions/userinfo.js"
import { withRouter } from "react-router-dom"

class Login extends Component {

  loginHanle(item){
    //存数据
    this.props.userinfoActions.login({
      username:item
    })

    //返回到我的页面
    var router = this.props.match.params.router;
    this.props.history.push('/'+decodeURIComponent(router));
  }

  render(){
    return(
      <div>
        <LoginComponent loginHandle={ this.loginHanle.bind(this) }/>
      </div>
    )
  }
}



// ----------- redux ---------------
function mapStateToProps(state) {
    return {
      userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch),
    }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Login))
