import React, { PureComponent } from 'react'

export class PureComPra extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         count:1
      }
    }

    
  render() {
    console.log("render")
    return (
      <div>
        <h1>pure comp{this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>name</button>
      </div>
    )
  }
}

export default PureComPra
