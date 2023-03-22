import React, { Component } from 'react'

export class StateReactComp extends Component {

    constructor(){
        super();
        this.state={
            name:'Bhairav',
            // Email:"bk@gmail.com",
            count:2
        }
    }
update(){
    this.setState({   // use for updating 
        name:"raj",
        count:this.state.count*2
    })
   
}

  render() {
    return (
      <div>
        <h1>count {this.state.count}</h1>
        <h1>Name:- {this.state.name}</h1>
        {/* <h1>Email:- {this.state.Email}</h1> */}
        <button onClick={()=>{this.update()}}>update</button>
      </div>
    )
  }
}

export default StateReactComp
