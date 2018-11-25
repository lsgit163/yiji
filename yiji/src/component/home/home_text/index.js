import React, { Component } from 'react'
import './style.less'

export default class HomeText extends Component {


  render(){
    var data = this.props.data;

    return(
      <div>
      <div className="hotproduct">
        <h3>{ this.props.title }</h3>
        <div className="hot-container">
          <ul className="clear-fix">
            {
              data.map((element,index) => {
                return (
                  <li key={index}>
                    <a href={ element.link }>
                        <img src={ element.img } alt=""/>
                        <span>{ element.title }</span>
                      </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
      </div>
    )
  }
}
