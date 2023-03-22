import React, { Component } from 'react'

export class counter extends Component {
constructor(props) {
  super(props)

  this.state = {
     counter:0
  }
}
handleClick=()=>{
    this.setState(({counter})=>{
      counter:counter+1  
    })
}

  render() {
    return (
      <div>
        <button onClick={()=>this.handleClick()}>Plz Click me{this.state.counter} times</button>
      </div>
    )
  }
}

export default counter
