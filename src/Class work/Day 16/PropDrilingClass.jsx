import React, { Component } from 'react'
import Child_1 from './Child_1'
export const MessageContext = React.createContext()


export class propDrilingClass extends Component {
constructor(props) {
  super(props)

  this.state = {
     msg:"hello  love"
  }
}




  render() {
    return (
      <div>
     
      <MessageContext.Provider value={this.state.msg} >
      <Child_1 />
      </MessageContext.Provider>

      
       
      </div>
    )
  }
}

export default propDrilingClass
