import React, { Component } from 'react'

export class EventBinding extends Component {

constructor(props) {
  super(props)
//   using constructor
//   this.getdata=this.getdata.bind(this)

  this.state = {
     name:"i am ram"
  }
}

getdata(){
    console.log(this)
}

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>

        {/* using arrow function */}
        <button onClick={()=>this.getdata()}>click</button>

        {/* using bind method */}

        {/* <button onClick={this.getdata.bind(this)}>Click</button> */}

        {/* Using constructor */}
        {/* <button onClick={this.getdata}>Click</button> */}

      </div>
    )
  }
}

export default EventBinding
