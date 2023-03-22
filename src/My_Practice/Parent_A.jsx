import React, { Component } from 'react'
import Chaild_A from './Chaild_A'
export class Parent_A extends Component {
  getdata(get){
    alert(get)
  }
  render() {
    return (
      <div>
          <Chaild_A username={this.getdata}/>
      </div>
    )
  }
}

export default Parent_A
