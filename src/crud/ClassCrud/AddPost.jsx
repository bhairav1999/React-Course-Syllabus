import axios from "axios";
import React, { Component } from "react";

export class AddPost extends Component {

constructor(props) {
  super(props)

  this.state = {
     userid:"",
     title:"",
     body:"",
  }
}

// data backend la patvaych


onsubdata=async(e)=>{
  const {userid,title,body}=this.state
const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
  body: JSON.stringify({
    title: title,
    body: body,
    userId: userid,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
// console.log(res);
// succefull zalay ka status
if (res.status===201 ){
  alert("post data add")
}
e.preventDefault()

   this.props.getdata(true)
}



  render() {
    const {userid,title,body}=this.state
    return (
      <div>
        <form action="" onSubmit={this.onsubdata}>
          <div>
            <h5 className="mb-3">Add New Post</h5>
          </div>
          <div>
            UserId: <input type="text" name="" id=""  value={userid}   onChange={(e)=>this.setState({userid:e.target.value})}/>
            Title : <input type="text" name="" id=""  value={title} onChange={(e)=>this.setState({title:e.target.value})}/>
            Body: <input type="text" name="" id="" value={body} onChange={(e)=>this.setState({body:e.target.value})} />
          </div>
          <div>
            <button type="submit" className="mt-3 mb-3">save post</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddPost;
