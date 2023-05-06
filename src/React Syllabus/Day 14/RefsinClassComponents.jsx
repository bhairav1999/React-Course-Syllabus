import React, { Component } from 'react'

export class RefsinClassComponents extends Component {

constructor(props) {
  super(props)

  this.refNameRef = React.createRef()
  
}

// using onlt inputfield

// componentDidMount(){
//     this.refNameRef.current.focus()
// }


//  using submit button

getdata(){
    this.refNameRef.current.focus() 
}


  render() {
    return (
      <div>
        <input type="text" name="" id="" ref={this.refNameRef} />
        <button onClick={()=>this.getdata()}>submit</button>
      </div>
    )
  }
}

export default RefsinClassComponents
