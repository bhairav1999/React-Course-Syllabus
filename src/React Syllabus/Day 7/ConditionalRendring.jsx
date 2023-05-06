import React, { Component } from 'react'

export class ConditionalRendring extends Component {

constructor(props) {
  super(props)

  this.state = {
     login:true
  }
}


  render() {
    // using if else block
    // if(this.state.login){
    //     return <h1>login complete</h1>
    // }else{
    //     return <h1>login error</h1>
    // }

    //  using variables

    // var msg;
    // if(this.state.login){
    //     msg=<h1>login complete</h1>
    // }else{
    //     msg=<h1>login error</h1>
    // }
    // return msg

    // Using conditionaloperator

    // return this.state.login ? <h1>login complete</h1> : <h1>login error</h1>

    // using shourt cut 

    return this.state.login &&  <h1>login complete</h1>
  }
}

export default ConditionalRendring
