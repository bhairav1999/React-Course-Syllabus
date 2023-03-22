import React, { Component } from 'react'

export class PureCom extends Component {

constructor(props) {
  super(props)

  this.state = {
     msg:" welcome"
  }
}


    changemessage =()=>{
        this.setState({
            msg:" welcome"
        })

    }

  render() {
    console.log("render")
    return (
      <div>
        <h1>hello{this.state.msg} </h1>
        <button onClick={this.changemessage}>cng msg</button>
      </div>
    )
  }
}

export default PureCom
