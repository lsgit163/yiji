import React, { Component } from 'react'
import SubUi from './sub'
import './style.less'

export default class listUi extends Component {

  render(){
    const data = this.props.data;
    console.log(data)
    return(
      <div className='list-container'>
        {
          data.map(function(item,index) {
              return <SubUi value={ item } key={ index }/>
          })
        }
      </div>
    )
  }
}
