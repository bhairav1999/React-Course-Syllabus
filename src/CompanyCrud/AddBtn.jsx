import React, { Component } from 'react'

export class AddBtn extends Component {
  render() {
    return (
      <div className='text-end me-4 mb-3'>
        <button className='btn-danger' onClick={()=>this.props.getdata(false)}>Add Post</button>
      </div>
    )
  }
}

export default AddBtn
