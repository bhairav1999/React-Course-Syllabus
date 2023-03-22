import axios from 'axios'
import React, { Component } from 'react'

export class DeleteBtnComp extends Component {

    
    DeletePost=async(id)=>{
        const result=await axios.delete("https://jsonplaceholder.typicode.com/posts/"+id)
        if (result.status===200) {
            alert("data delete")
        
        }
     }
     
 

  render() {
    return (
      <div>
        <button onClick={this.DeletePost}>Delete</button>
      </div>
    )
  }
}

export default DeleteBtnComp
