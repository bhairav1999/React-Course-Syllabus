import React, { Component } from 'react'

export class Stateclasscomponents extends Component {

constructor(props) {
  super(props)

  this.state = {
     name:"i am bhairav"
  }
}




  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={()=>this.setState({name:"i am raj"})}>Click me</button>
      </div>
    )
  }
}

export default Stateclasscomponents
