import React, { Component } from 'react'
import axios from 'axios';
export class ClassCompLifeCycleMethod extends Component {
//  initialization
constructor(props) {
  console.log("in constructor")
  super(props)

  this.state = {
     message:"welcome", // defalut value set krto
     users:[]

  }
  console.log(this.state.message)
}
// 1) mounting phase ---> dom insert k
//1.1 getderiverdstate  --> use 
static getDerivedStateFromProps(props,state){
  console.log(" in getDerivedStateFromProps",props.msg)
    return {message:props.msg}
}
// method1.2
async componentDidMount(){
  console.log("com did")
  // most use for Api
  
    const usersRes = await axios.get('https://jsonplaceholder.typicode.com/users')
     console.log(usersRes.data);

     // update satate value
     this.setState({
         users:usersRes.data
     })


}
//  updating ---> com state and props change


  render() {
    console.log("from render method")  // jsx cha part dom mde insert hoto
    return (
      <div>
      {this.state.message}
        <h1>class com </h1>
      </div>
    )
  }
}

export default ClassCompLifeCycleMethod
