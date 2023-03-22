import React, { Component } from 'react'

export class ReactClassCom extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         color:"red"
      }
    }
    
  render() {

    const changecolor =()=>{
        this.setState({
            color:"green"
        })
    }

    return (
      <div>
        <h1>my fav color: {this.state.color}</h1>
        <button onClick={changecolor}></button>
      </div>
    )
  }
}

export default ReactClassCom
