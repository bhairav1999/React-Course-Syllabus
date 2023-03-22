import axios from 'axios';
import React, { Component } from 'react'

export class UpdateData extends Component {

constructor(props) {
    
  super(props)

  this.state = {
    userId:props.pass.userId,
    title: props.pass.title,
    body: props.pass.body
  }
}
  onData=async(item)=>{
   item.preventDefault();
   const res=await axios.put('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
if (res.status===200) {
  
  
}
}



  render() {
    return (
     <>
<div>update</div>

{/* {JSON.stringifybody(this.props.pass)} */}

<form action=""  onSubmit={this.onData()}>


<div>
userId : <input type="text" name="" id="" value={this.state.userId}  onChange={(e)=>this.setState({userId:e.target.value})}/>
title : <input type="text" name="" id="" value={this.state.title} onChange={(e)=>this.setState({title:e.target.value})}/>
body : <input type="text" name="" id="" value={this.state.body} onChange={(e)=>this.setState({body:e.target.value})}/>
</div>
<div>
    <button type="submit">submit</button>
</div>



</form>


     </>
    )
  }
}

export default UpdateData
