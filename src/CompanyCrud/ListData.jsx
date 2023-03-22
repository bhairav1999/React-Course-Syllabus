import axios from "axios";
import React, { Component } from "react";
import DeleteBtnComp from './DeleteBtnComp';
import UpdateData from './UpdateData';


export class ListData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
      UpdateDataPost:{}
    };
  }

  async componentDidMount() {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(result);
    if (result.data.length > 0) {
      this.setState({
        post: result.data,
      });
    }
  }

  handlUpdate=(item)=>{
  this.setState({
    UpdateDataPost:item
  })
  alert(`User ID:${item.userId} Title:${item.title} Body:${item.body}`)
  }

  render() {
    return (
      
      <div>
      <UpdateData  pass={this.state.UpdateDataPost}/>
        {/* <h1>{JSON.stringify(this.state)}</h1> */}
        <table>
          <thead>
            <tr>
              <td>User Id</td>
              <td>Title</td>
              <td>Body</td>
            </tr>
          </thead>
          <tbody>
            {this.state.post.map((item,index) => {
              return (
                <tr key={index}>
                  <td>{item.userId}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                  <td><DeleteBtnComp/></td>
                  <td><button onClick={()=>this.handlUpdate(item)}>update</button></td>
                  
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListData;
