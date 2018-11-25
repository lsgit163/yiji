import React, { Component } from 'react'
import './style.less'

export default class SearchInput extends Component {

  searchHandle(event) {
    if(event.keyCode != 13) {
      return;
    }
    this.props.enterHandle(event.target.value)
  }

  render(){
    return <input className='search_input' type='text' onKeyUp={ this.searchHandle.bind(this) }/>
  }
}
