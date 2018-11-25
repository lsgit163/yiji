import React, { Component } from 'react'
import ReactSwipe from 'react-swipe';
import './style.less'
import { Link } from 'react-router-dom'

export default class HomeBanner extends Component {

  constructor(){
    super();
    this.state = {
      index:0
    }
  }



  render(){
    const images = this.props.data;
    var _this = this.state.index;
    const opt = {
      continuous: true,
      auto: 3000,
      callback:function(index,ele){
        this.setState({
          index:index
        })
      }.bind(this)
    }
    return(
      <div className='home-banner'>
            <ReactSwipe className="carousel" swipeOptions={ opt }>
                {
                  images.map(function (element,index){
                      return <div key={ index }><Link to='/search'><img src={ element } alt='提示'/></Link></div>
                  })
                }
            </ReactSwipe>
            <ul>
              {

                images.map(function (element,index){
                    return <li className={ _this === index ? 'active' : '' } key={ index }></li>
                })
              }
            </ul>
      </div>
    )
  }
}
