import React, { Component } from 'react'


export default class SubUi extends Component {

  render(){
    const item = this.props.value;

    return(
      <div className='list-container'>
          <div className="list-item">
                  <img src={ item.img } alt=""/>
                  <div className="mask">
                    <div className="left">
                      <p>{ item.title }</p>
                      <p>{ item.houseType }</p>
                    </div>
                    <div className="right">
                      <div className="btn">
                        { item.rentType }
                      </div>
                      <p>{ item.price }/月</p>
                    </div>
            </div>
        </div>
      </div>
    )
  }
}
