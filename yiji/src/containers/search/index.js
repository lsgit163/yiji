import React, { Component } from 'react'
import Search from '../../component/search/search_hearder'
import SearhContent from '../../component/search/search_content/list'

export default class SearchContainer extends Component {
  render(){
    //读取路由地址
    const params = this.props.match.params;
    return(
      <div>
        <Search history={ this.props.history }/>
        <SearhContent keywords={ params.keywords }/>
      </div>
    )
  }
}
