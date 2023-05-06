import React, { Component } from 'react'
import Child2 from './Child2'


export class Child1 extends Component {
  render() {
    return (
      <div>
        <h1>hiii i am 1 {this.props.name}</h1>
        <Child2 name={this.props.name}/>
        
      </div>
    )
  }
}

export default Child1
