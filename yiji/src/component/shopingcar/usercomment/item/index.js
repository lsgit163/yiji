import React from 'react'
import './style.less'
import { submitCommentData } from '../../../../fetch/shoppingcar/comment.js'

import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"

class CarComment extends React.Component {

    constructor() {
      super();
      this.state ={
        commentState:0
      }
    }
    componentDidMount(){
      this.setState({
        commentState:this.props.data.commentState
      })
    }
    //出现评论框
    showComment() {
      this.setState({
        commentState:1
      })
    }
    //提交
    submitCommentHandler() {
      this.setState({
        commentState:2
      })
      let username = this.props.userinfo.username;
      let cityname = this.props.city.cityname;
      let textareaContent = this.refs.commentText;
      //提交评论信息
      var result = submitCommentData({
        usercomment:textareaContent,
        cityname:cityname,
        username:username
      })
      result.then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data);
      })
    }
    //取消
    hideComment() {
      this.setState({
        commentState:0
      })
    }

    render() {
      let data = this.props.data
        return (
          <div className="clear-fix order-item-container">
              <div className="order-item-img float-left">
                  <img src={data.img}/>
              </div>
              <div className="order-item-comment float-right">
                {
                  this.state.commentState === 0
                  ?<button className="btn" onClick={ this.showComment.bind(this) }>评价</button>
                  : this.state.commentState === 1
                  ? ""
                  :<button className="btn unseleted-btn">已评价</button>
                }

              </div>
              <div className="order-item-content">
                  <span>商户：{data.title}</span>
                  <span>类型：{data.houseType}</span>
                  <span>价格：￥{data.price}</span>
              </div>
              {
                this.state.commentState === 1?
                <div className="comment-text-container">
                  <textarea style={{width: '100%', height: '80px'}} className="comment-text" ref="commentText"></textarea>
                  <button className="btn"  onClick={this.submitCommentHandler.bind(this)}>提交</button>
                  &nbsp;
                  <button className="btn unseleted-btn" onClick={this.hideComment.bind(this)}>取消</button>
                </div>
                :""
              }
          </div>
        )
    }
}

// ----------- redux ---------------
function mapStateToProps(state) {
    return {
      city:state.city,
      userinfo:state.userinfo
    }
}

export default withRouter(connect(
  mapStateToProps
)(CarComment))
