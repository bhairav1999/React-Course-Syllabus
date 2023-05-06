import axios from 'axios'
import React, { Component } from 'react'

export class ListRendring extends Component {

constructor(props) {
  super(props)

  this.state = {
    //  name:["ram","raj"]
     post:[]
  }
}

async getUsersData() {
    const usersRes = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(usersRes);

    this.setState({
        post: usersRes.data,
    });
  }

    
  render() {
    return (
      <div>
         {/* <h1>{this.state.name}</h1> */}
         {/* {
            this.state.name.map((e,i)=> <h1>{e}</h1>)
         } */}


     <button onClick={()=>this.getUsersData()}>Click me</button>

     <table className='table'>
        <thead>
            <th>ID</th>
            <th>Name</th>
            
        </thead>
        <tbody>
            {
                this.state.post.map((e,i)=>{
                   return( <tr key={i}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                    </tr>
                )})
            }
        </tbody>
     </table>

      </div>
    )
  }
}

export default ListRendring

