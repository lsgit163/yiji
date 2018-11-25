import React, { Component } from 'react'
import FooterNav from '../../component/home/home_footer'
import ShopHeader from '../../component/home/home_header'
import ShopBanner from '../../component/home/home_banner'
import ShopList from './sublist'
//图片
import banner1 from '../../static/images/banner1.png'
import banner2 from '../../static/images/banner2.png'
import banner3 from '../../static/images/banner3.png'
import banner4 from '../../static/images/banner4.png'
import banner5 from '../../static/images/banner5.png'
import banner6 from '../../static/images/banner6.png'

const imgsArr = [banner1,banner2,banner3,banner4,banner5,banner6];

export default class Shop extends Component {
  render(){
    return(
      <div>
        <ShopHeader />
        <ShopBanner data={ imgsArr }/>
        <ShopList />
        <FooterNav />
      </div>
    )
  }
}
