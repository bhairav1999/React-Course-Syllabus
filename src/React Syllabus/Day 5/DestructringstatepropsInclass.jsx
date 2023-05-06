import React, { Component } from 'react'

export class DestructringstatepropsInclass extends Component {

  render() {
    const {name}=this.props
    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
  }
}

export default DestructringstatepropsInclass
