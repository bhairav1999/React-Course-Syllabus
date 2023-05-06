import React, { Component } from 'react'

export class Destructringstate extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:"i am ram"
      }
    }
    
  render() {
    const {name} = this.state
    return (
      <div>
        {/* <h1>{this.state.name}</h1> */}
        <h1>{name}</h1>
      </div>
    )
  }
}

export default Destructringstate
