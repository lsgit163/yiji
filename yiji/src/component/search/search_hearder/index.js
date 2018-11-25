import React from "react"
import SearchInput from '../sub_input'
import "./style.less"


export default class SearchHeader extends React.Component{

  clickHandle(event){
    window.history.back()
  }

  enterHandle(value){
    this.props.history.push("/search/" + encodeURIComponent(value));
  }

  render(){
    return(
      <div id="search-header" className="clear-fix">
         <span className="back-icon float-left" onClick={this.clickHandle.bind(this)}>
             <i className="icon-chevron-left"></i>
         </span>
         <div className="input-container">
             <i className="icon-search"></i>
             <SearchInput value="" enterHandle={this.enterHandle.bind(this)}/>
         </div>
      </div>
    )
  }
}
