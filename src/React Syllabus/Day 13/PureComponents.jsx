import React, { PureComponent } from 'react'

export class PureComponents extends PureComponent {

constructor(props) {
  super(props)

  this.state = {
     name:1
  }
}

  render() {
    console.log("i am render")
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={()=>this.setState({name:1})}>Click me</button>
        {/* <button onClick={()=>this.setState({name:this.state.name+1})}>Click me</button> */}
      </div>
    )
  }
}

export default PureComponents
