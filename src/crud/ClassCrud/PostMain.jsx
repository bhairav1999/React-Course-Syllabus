import React, { Component } from 'react'
import AddNewPostBtn from './AddNewPostBtn';
import PostList from './PostList'
import AddPost from './AddPost'


export class PostMain extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         postflag:true  // postlist
      }
    }
    getdata=(falgvalue)=>{
    this.setState({
        postflag:falgvalue
    })
    }
    
  render() {
    return (
      <div className='text-center'>
        <h1 >Post Mangement</h1>
        <AddNewPostBtn getdata={this.getdata}/>
        {/* <AddPost/>
        <PostList/> */}

        {this.state.postflag ? <PostList/> :  <AddPost getdata={this.getdata}/>}

      </div>
    )
  }
}

export default PostMain
