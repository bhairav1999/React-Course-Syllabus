import { createContainer } from '@mui/system'
import React, { Component } from 'react'
import Child1 from './Child1'


export class PropsDerlingInClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"i am raj"
      }
    }
    
  render() {
    return (
      <div>
        <Child1 name={this.state.name}/>

        

      </div>
    )
  }
}

export default PropsDerlingInClass

