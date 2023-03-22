import React, { Component } from 'react'
import './ClassCrud.css'
export class AddNewPostBtn extends Component {
  render() {
    return (
      <div className='text-end me-4 pxy-1 '>
        <button  className='bg-hpink text-aqua ' onClick={()=>this.props.getdata(false)}>Add New Post</button>
      </div>
    )
  }
}

export default AddNewPostBtn
