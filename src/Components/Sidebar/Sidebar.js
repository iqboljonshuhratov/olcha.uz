import "./Sidebar.css";
import React, { Component } from 'react'

class Sidebar extends Component {
    constructor(props){
        super(props);
        
    }

    

  render() {
    // console.log(this.state);
    return (
      <div className={`sidebar ${this.props.hide && "hide"}`}>
        <div className="d-flex justify-content-between align-items-center ">
            <h1>Menu</h1>
            <button className="btn btn-danger" onClick={()=>this.props.changeHide(true)}>x</button>
        </div>
      </div>
    )
  }
}

export default Sidebar