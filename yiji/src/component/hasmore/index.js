import React from "react"

export default class LoadMore extends React.Component{
  constructor(){
    super();

  }

  // 滚动加载的事件
  componentDidMount(){
    // 读取父级传递的加载更多事件
    const loadMoreFn = this.props.loadMoreFn;
    // 获取元素
    const wrapper = this.refs.wrapper
    // 获取当前浏览器视口高度
    const windowHeight = window.screen.height;

    // 增加定时器，监听滚动事件的值
    var timeoutId;

    function callback(){
      // 获取top的值
      let top = wrapper.getBoundingClientRect().top;
      if(top && top < windowHeight){
        // 加载更多的业务逻辑
        loadMoreFn()
      }
    }

    window.addEventListener("scroll",function(event){
      callback();
      if(this.props.isLoadingMore){
        return;
      }
      if(timeoutId){
        clearTimeout(timeoutId)
      }
      // 如果 hasMoreLoad:加载中，加载完毕，如果加载中... 清除下面所有的请求
      timeoutId = setTimeout(callback,50)
    }.bind(this))
  }

  clickHandler(){
    const loadMoreFn = this.props.loadMoreFn;
    loadMoreFn();
  }

  render(){
    return(
      <div className="load-more" ref="wrapper">
         {
           this.props.isLoadingMore
           ?<div>正在加载数据...</div>
           :<button onClick={ this.clickHandler.bind(this) }>加载更多</button>
         }
     </div>
    )
  }
}
