import React, { Component } from 'react'
import  {MessageContext} from './PropDrilingClass'


export class Child_3 extends Component {
  render() {
    return (
      <div>
        <MessageContext.Consumer>
        {value=><h1>{value}jiiii</h1>}
        </MessageContext.Consumer>
      </div>
    )
  }
}

export default Child_3
