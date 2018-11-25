import React, { Component } from 'react'
import ServerHeader from '../../component/sever/sever_header'
import FooterNav from '../../component/home/home_footer'
import ServerBanner from '../../component/home/home_banner'
import ServerText from './sublist'
import ServerIcon from '../../component/sever/server_function'

import banner1 from '../../static/images/banner1.png'
import banner2 from '../../static/images/banner2.png'
import banner3 from '../../static/images/banner3.png'
const images = [banner1,banner2,banner3]

export default class Life extends Component {
  render(){
    return(
      <div>
        <ServerHeader title='生活服务' router='/city' history={ this.props.history }/>
        <ServerBanner data={ images }/>
        <ServerIcon />
        <ServerText />
        <FooterNav />
      </div>
    )
  }
}
