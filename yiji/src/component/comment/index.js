import React, { Component } from 'react'

import Tabs from '../tabs'
import DetailsBanner from '../home/home_banner'
import Comment from '../comment'
import Item from './subpage'

export default class CommentUi extends Component {

  render(){
    // 获取数据
    const data = this.props.data
    return (
      <div>
        {
          data.map(function (ele,index){
            return <Item res={ ele } key={ index }></Item>
          })
        }
      </div>
    )
  }
}
