import axios from 'axios'
import React, { Component } from 'react'

export class DeleteBtn extends Component {

    deletepost= async()=>{
        const res=await axios.delete('https://jsonplaceholder.typicode.com/posts/'+this.props.id)
        console.log(res);
        if (res.status===200) {
            alert("post data deleted")
        }
        
    }
  render() {
    return (
      <div>
        <button onClick={this.deletepost}>Delete</button>
      </div>
    )
  }
}

export default DeleteBtn
