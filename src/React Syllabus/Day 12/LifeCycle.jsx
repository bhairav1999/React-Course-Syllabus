import React, { Component } from 'react'

export class LifeCycle extends Component {

 constructor(props) {
   super(props)
 
   this.state = {
      name:"i am raj",
      showcom:false
   }
 }

 static getDerivedStateFromProps(props, State) {
   console.log("getDerivedStateFromProps")
   return {name:props.User}
 }

 

 componentDidMount() {
    console.log("componentDidMount")
    this.setState({
        name:"i am rajvir",
        showcom:true
    })
 }

 shouldComponentUpdate (){
    console.log("shouldComponentUpdate")
    return true
 }
 
//  update

getSnapshotBeforeUpdate (){
  console.log("getSnapshotBeforeUpdate")
  return null
}

 componentDidUpdate() {
    console.log("componentDidUpdate")
 }






  render() {
    console.log("render")
    return (
      <div>
        {this.state.name}
        {
            this.state.showcom && <LifeCycle1/>
        }
      </div>
    )
  }
}

export default LifeCycle



export class LifeCycle1 extends Component {
    componentWillUpdate() {
        console.log("componentWillUpdate")
    }
  render() {
    return (
      <div>
        <h1>I am Remove</h1>
      </div>
    )
  }
}


