import React, { Component } from 'react'

export class Chaild_A extends Component {
  render() {
    return (
      <div>
         <button onClick={()=>this.props.username("hiii jii")}>click</button>
      </div>
    )
  }
}

export default Chaild_A
