import React, { Component } from 'react'
import './style.less'
import Tabs from '../tabs'
import DetailsBanner from '../home/home_banner'
import Comment from '../../containers/detail/sublist/comment.js'
import ByandStoreButton from '../../containers/detail/sublist/buyandstore.js'

export default class Details extends Component {

  render(){
    var data = this.props.data;
    var id = this.props.id;
    return(
      <div>
        {
          this.props.data.imgs.length > 0
          ?<DetailsBanner data = { this.props.data.imgs }/>
          :<div>正在加载...</div>
        }
        <Tabs>
        <div tabname="房源信息">
        <div className="detail-info">
              <h3>{ data.title }</h3>
              <div className="box">
                <ul>
                    <li>
                      <span>{ data.price }/月</span>
                      <p>租金</p>
                    </li>
                    <li>
                      <span>{ data.info.type }/月</span>
                      <p>房型</p>
                    </li>
                    <li>
                      <span>{ data.houseType }</span>
                      <p>面积</p>
                    </li>
                </ul>
              </div>
              <div className="info">
                <div className="info-list">
                  <p>楼层：{ data.info.level }</p>
                  <p>装修：{ data.info.style }</p>
                </div>
                <div className="info-list">
                  <p>类型：{ data.info.type }</p>
                  <p>朝向：{ data.info.orientation }</p>
                </div>
                <div className="info-list">
                  <p>年代：{ data.info.years }</p>
                </div>
              </div>
          </div>
          <ByandStoreButton />
        </div>
        <div tabname="房源评价">
          <Comment id={id}/>
        </div>
        </Tabs>
      </div>
    )
  }
}
