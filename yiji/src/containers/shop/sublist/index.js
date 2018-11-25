import React, { Component } from 'react'
import ShopListUi from '../../../component/shoplist'
import { shopFetch } from '../../../fetch/shop'
import { getDefaultCity } from '../../../utils'
import * as key from '../../../utils/key.js'
import LoadMore from "../../../component/hasmore"
import { getSearchList,getFreeSearchList } from "../../../fetch/search"
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"


class ShopList extends Component {

  constructor(){
    super();
    this.state = {
      data:[],
      page:0
    }
  }

  componentDidMount(){
    let cityName = getDefaultCity(key.LOCAL_CITY);
    var page = this.state.page;
    var result = shopFetch(cityName,page);
    console.log(result)
    result.then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({
        data:data.data,
        page:this.state.page + 1
      })
    })
  }

  componentDidMount(){
    this.loadFirstPageData();
  }

  componentDidUpdate(prevProps, prevState){
    const keywords = this.props.keywords;
    if(keywords === prevProps.keywords){
      // 不必重复请求执行
      return;
    }
    this.loadFirstPageData();
  }

  /*
    数据合并：concat
    加载更多
  */
  loadMoreFn(){
    this.setState({
      isLoadingMore:true
    })
    // 加载中和加载更多:isLoadingMore
    // 网络请求
    const keywords = this.props.keywords || "";
    const cityName = this.props.city.cityName;
    let page = this.state.page;
    var result = getSearchList(cityName,page,keywords); // 网络请求
    this.resultHttp(result)
    this.setState({
      isLoadingMore:false
    })
  }



  // 第一次请求数据：第一次page=0
  loadFirstPageData(){
    const keywords = this.props.keywords || "";
    const cityName = this.props.city.cityName;
    var result = getSearchList(cityName,0,keywords); // 网络请求
    this.resultHttp(result);
  }

  resultHttp(result){
    result.then(res => {
      return res.json()
    })
    .then(data => {
      this.setState({
        // 上一次加上最新请求的数据
        data:this.state.data.concat(data.data), // 数据累加
        hasMore:data.hasMore,
        page:this.state.page + 1
      })
    })
  }

  render(){
    return(
      <div>
        {
          this.state.data.length > 0
          ?<ShopListUi data = { this.state.data }/>
          :<div>正在加载数据...</div>
        }
        {
          this.state.hasMore
          ?<LoadMore loadMoreFn={this.loadMoreFn.bind(this)} isLoadingMore={this.state.isLoadingMore}/>
          :<div>已经到底了！</div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
      city:state.city
    }
}

export default withRouter(connect(
  mapStateToProps
)(ShopList))
