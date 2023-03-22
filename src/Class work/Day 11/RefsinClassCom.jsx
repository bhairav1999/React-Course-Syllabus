import React, { Component } from 'react'

export class Welcome1 extends Component {
    constructor(props) {
      super(props)
    
     this.inputRef = React.createRef()
    
     
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
    
  render() {
    return (
      <div>
         <label> username</label>
         <input type="text" ref={this.inputRef} />
        
      </div>
    )
  }
}

export default Welcome1