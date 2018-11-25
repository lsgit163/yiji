import React, { Component } from "react"
import Details from '../../../component/detail'
import { getDetailsData } from '../../../fetch/detail'

export default class DetailConent extends Component {

  constructor() {
    super();
    this.state = {
      data:{
        imgs:[],
        title: "",
        price: "",
        rentType: "",
        houseType: "",
        info: {
          years: "",
          type: "",
          level: "",
          style: "",
          orientation: ""
        }
      }
    }
  }


  componentDidMount(){
    var result = getDetailsData(this.props.id);
    result.then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({
        data:data
      })
    })
  }

  render(){
    return(
      <div>
      {
        this.state.data
        ?<Details data={ this.state.data } id={this.props.id}/>
        :<div>正在加载...</div>
      }
      </div>
    )
  }
}
