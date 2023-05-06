import React, { Component } from 'react'
import Child3 from './Child3'

export class Child2 extends Component {
  render() {
    return (
      <div>
      <h1> hiii i am 2 {this.props.name}</h1>
        <Child3  name={this.props.name}/>
      </div>
    )
  }
}

export default Child2
