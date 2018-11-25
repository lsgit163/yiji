import React, { Component } from 'react'
import './style.less'

export default class Tabs extends Component {

  constructor(){
    super();
    this.state = {
        currentIndex:0
    }
  }

  // title高亮
  check_title_index(index){
    return index === this.state.currentIndex ? 'Tab_title active' : 'Tab_title'
  }

  // 显示内容的切换
  check_item_index(index){
    return index === this.state.currentIndex ? 'Tab_item show' : 'Tab_item'
  }

  clickHandler(index){
    this.setState({
      currentIndex:index
    })
  }

  render(){
    return(
      <div>
        {/* 头部 */}
        <div className="Tab_title_wrap">
          {
            React.Children.map(this.props.children,(element,index) => {
              return (
                <div onClick={ this.clickHandler.bind(this,index) } className={ this.check_title_index(index) }>{ element.props.tabname }</div>
              )
            })
          }
        </div>
        {/* 内容 */}
        <div className="Tab_item_wrap">
          {React.Children.map(this.props.children,(element,index)=>{
            return(
                <div className={ this.check_item_index(index) }>{ element }</div>
                );
          })}
        </div>
      </div>
    )
  }
}
