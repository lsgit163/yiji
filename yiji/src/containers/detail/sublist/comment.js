import React, { Component } from "react"
import CommentUi from '../../../component/comment'
import { getCommentData } from '../../../fetch/detail'

export default class DetailConent extends Component {

  constructor() {
    super();
    this.state = {
      data:[]
    }
  }

  componentDidMount(){
    var result = getCommentData(this.props.id);
    result.then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({
        data:data.data
      })
    })
  }

  render(){
    return(
      <div>
      {
        this.state.data.length > 0
        ?<CommentUi data={ this.state.data } id={this.props.id}/>
        :<div>正在加载...</div>
      }
      </div>
    )
  }
}
