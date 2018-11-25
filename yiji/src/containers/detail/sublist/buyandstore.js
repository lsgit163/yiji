import React, { Component } from "react"
import BuyandstoreComponent from '../../../component/buyandstore'

import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { bindActionCreators } from "redux"
import * as storeActions from "../../../redux/actions/store.js"

class BuyandStore extends Component {

  constructor(){
    super();
    this.state = {
      ischeck:false,
      isstore:false
    }
  }

  buyHandle(){
    if(this.ischecked()) {
      console.log('购买');
      //发送订单到后台
    }else{
      console.log('去登录');
      var id = encodeURIComponent(this.props.match.params.id);
      this.props.history.push('/login/' + encodeURIComponent('detail/'+id));
    }
  }

  storeHandle(){
    if(this.ischecked()) {

      var id = this.props.match.params.id;
      this.isstored();
      var store = this.props.store;
      //是否收藏了
      if(this.state.isstore) {
          //收藏了
          this.props.storeActions.rm({
            id:id
          })
          this.setState({
            isstore:false
          })
      }else{
        //未收藏
        this.props.storeActions.add({
          id:id
        })
        this.setState({
          isstore:true
        })
      }
    }else{
      console.log('去登录');
      var id = encodeURIComponent(this.props.match.params.id);
      this.props.history.push('/login/' + encodeURIComponent('detail/'+id));
    }
  }

  ischecked(){
    if(this.props.userinfo.username) {
        return true;
    }
    return this.state.ischeck;
  }

  isstored(){
    const store = this.props.store;
    var id = this.props.match.params.id;
    store.some(item => {
      this.setState({
        isstore:true
      })
      return true;
    })
  }



  render(){
    return(
      <BuyandstoreComponent
       buyHandle = { this.buyHandle.bind(this) }
       storeHandle={ this.storeHandle.bind(this) }/>
    )
  }
}

// ----------- redux ---------------
function mapStateToProps(state) {
    return {
      userinfo:state.userinfo,
      store:state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
      storeActions: bindActionCreators(storeActions, dispatch),
    }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyandStore))
