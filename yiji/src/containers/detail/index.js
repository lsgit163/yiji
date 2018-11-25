import React, { Component } from "react"
import DetailConent from './sublist/index.js'
import Heard from '../../component/detail/subpage'

export default class Detail extends Component {

  render(){
    var id = this.props.match.params.id;
    return(
      <div>
        <Heard title='详情页'/>
        <DetailConent id={ id }/>
      </div>
    )
  }
}
