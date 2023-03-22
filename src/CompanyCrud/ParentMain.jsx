import React, { Component } from 'react'
import AddBtn from './AddBtn'
import ListData from './ListData'
import AddingPost from './AddingPost'

export class ParentMain extends Component {

constructor(props) {
  super(props)

  this.state = {
     flagvalue:true
  }
}

getdata=(flag)=>{
    
    this.setState({
        flagvalue:flag
    })
}


  render() {
    return (
      <div className='text-center container '>
        
        <h1 className='mt-2'>Post mangement</h1>
        <AddBtn getdata={this.getdata} />
        {/* <AddingPost/>
        <ListData/> */}
        {this.state.flagvalue ? <ListData/> : <AddingPost getdata={this.getdata}/>}
       
      </div>
    )
  }
}

export default ParentMain
