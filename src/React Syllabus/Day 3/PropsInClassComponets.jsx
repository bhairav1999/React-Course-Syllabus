import React, { Component } from 'react'

export class PropsInClassComponets extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}

export default PropsInClassComponets
