import React, { Component } from 'react'

import { HttpGetData } from'../../../fetch/home'
import HomeText from '../../../component/home/home_text/index.js'

export default class HomeData extends Component {

  constructor(){
    super();
    this.state = {
      data:[],
      data2:[]
    }
  }

  componentDidMount() {
    var result = HttpGetData('api/data1');
    result.then(res=>{
      return res.json();
    })
    .then(data=>{
      // console.log(data);
      this.setState({
        data:data
      })
    })

    var result2 = HttpGetData('api/data2');
    result2.then(res=>{
      return res.json();
    })
    .then(data=>{
      // console.log(data);
      this.setState({
        data2:data
      })
    })
  }

  render(){

    return(
      <div>
        {
          this.state.data.length>0
          ?
          <HomeText data={ this.state.data } title="热销单品"/>
          :
          <div>正在加载数据中...</div>
        }
        {
          this.state.data2.length>0
          ?
          <HomeText data={ this.state.data2 } title="热销产品"/>
          :
          <div>正在加载数据中...</div>
        }
      </div>
    )
  }
}
