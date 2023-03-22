//------component--------->

// class component Prpos--------------->

// import React, { Component } from 'react'

// export class KMam extends Component {
//     constructor(props) {
//       super(props)

//       this.state = {
//         UserName:"Modi1777",
//         FirstName:"Rohit",
//         LastName:"Sharma",
//         Age:90,
//         City:"Pune"
//       }
//     }
//     update(){
//         this.setState({
//             FirstName:"RAj",
//         })
//     }

//   render() {
//    const {FirstName}=this.state
//     return (
//       <div>
//         <h1>i am {FirstName}</h1>
//         <button onClick={()=>this.update()}>Plz click me</button>
//       </div>
//     )
//   }
// }

// export default KMam

//-----------------------eventBinding------------------->

// import React, { Component } from 'react'

// export class KMam extends Component {
//     constructor(props) {
//       super(props)

//     //    using constructor event Binding
//     this.update=this.update.bind(this)

//       this.state = {
//         UserName:"Modi1777",
//         FirstName:"Rohit",
//         LastName:"Sharma",
//         Age:90,
//         City:"Pune"
//       }
//     }

//     update(){
//         this.setState({

//         })
//         console.log(this);
//     }

//   render() {
//     const {UserName,FirstName,LastName,Age,City}=this.state
//     return (
//       <div>
//   <center>
//   {/* <button  onClick={this.update.bind(this)}>Plz click me</button> */}
//   {/* <button  onClick={this.update}>Plz click me</button> */}
//   <button  onClick={()=>this.update()}>Plz click me</button>
//   </center>

//       </div>
//     )
//   }
// }

// export default KMam

//--------------conditional binding------------------>

// import React, { Component } from 'react'

// export class KMam extends Component {
//     constructor(props) {
//       super(props)

//       this.state = {
//          check:true
//       }
//     }

//   render() {
//     // if (this.state.check) {
//     //     return <h1>i am true</h1>
//     // }
//     // else{
//     //     return <h2>i am false</h2>
//     // }
// //    var msg;
// //     if (this.state.check) {
// //        msg= <h1>i am true</h1>
// //     }
// //     else{
// //      msg= <h2>i am false</h2>
// //     }
// //     return msg
// //  return (this.state.check ) ?  <h1>i am true</h1>  :  <h2>i am false</h2>
// return (this.state.check ) && <h1>i am true</h1>

//   }

// }

// export default KMam

//--------------------list rendring------------->

// import axios from 'axios'
// import React, { Component } from 'react'

// export class KMam extends Component {

//     constructor(props) {
//       super(props)

//       this.state = {
//         //  Post:["Raj","Rahul","Ram","Rohit"]
//         User:[]
//       }
//     }
//     async update(){
//         const result= await axios.get("https://jsonplaceholder.typicode.com/Posts")
//         console.log(result);
//         this.setState({
//             User:result.data
//         })
//     }

//   render() {
//     const {Post,User}=this.state
//     return (
//       <div>
//       {/* {User} */}
//         {/* <h1>{Post[1]}</h1>
//         <h1>{Post[2]}</h1> */}
//         {/* {
//             Post.map((item)=> <h1>{item}</h1>)
//         } */}
//         <button onClick={()=>this.update()}>plz click me</button>
//         {
//             User.map((item)=>{
//                return(
//                 <table className='border-1'>

//                         <tr>
//                             <td>{item.userId}</td>
//                             <td>{item.title}</td>
//                             <td>{item.body}</td>
//                         </tr>

//                 </table>
//                )
//             })
//         }

//       </div>
//     )
//   }
// }

// export default KMam

//---------------basic form---------------->

// import React, { Component } from 'react'

// export class KMam extends Component {
//  constructor(props) {
//    super(props)

//    this.state = {
//       Name:'',
//       password:""
//    }
//  }
//  submitdata=(event)=>{
//     const {Name,password}=this.state
//     alert(`Name: ${Name} Password: ${password}`)
//     event.preventDefault()
//  }

//   render() {
//     const {Name,password}=this.state
//     return (
//       <div>
//         <form action="" className='mt-4 ms-5' onSubmit={this.submitdata}>
//        Name: <input type="text" name="" id=""  value={Name} onChange={(event)=>this.setState({Name:event.target.value})}/>
//        Password: <input type="password" name="" id="" value={password} onChange={(event)=>this.setState({password:event.target.value})} />
//        <button type="submit" className='ms-3'>plz click me</button>

//         </form>
//       </div>
//     )
//   }
// }

// export default KMam

//-------------------------css-------------------------->

// import React, { Component } from 'react'

// export class KMam extends Component {
//   render() {

//     const heading={
//         color:"red"
//     }
//     return (
//       <div>
//         <h1 style={{color:"red"}}>hiiiii</h1>
//         <h1 style={heading}>hiiiii</h1>
//       </div>
//     )
//   }
// }

// export default KMam

//--------------life cycle-------------------------->
/*
life 

inti
mounting
update
unmount

*/

// import React, { Component } from 'react'

// export class KMam extends Component {

//     constructor(props) {
//         console.log("constructor");
//       super(props)

//       this.state = {
//          name:"Rohit",
//          showcom:true
//       }
//     }

//     // mounting
//     // getderivedstateformprops()
// static getDerivedStateFromProps(props,state){
//     console.log("getDerivedStateFromprops");
//     return {name:props.User}
// }

//     // mounting---3rd
//     componentDidMount(){
//         console.log("componentDidMount");
//         this.setState({
//             name:"Ram" ,
//             showcom:false
//         })
//     }
//    //update --1--getderivedstateformprops
// //     shouldcomupdate  ----internally check krt agodarchi value an atachi value
// shouldComponentUpdate(){
//     console.log("shouldComponentUpdate");
//     return true

// }

// getSnapshotBeforeUpdate(){
//     console.log("getSnapshotBeforeUpdate");
//     return null
// }

// componentDidUpdate(){
//     console.log("componentDidUpdate");
// }

//   render() {
//     console.log("i am render");
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//         {this.state.showcom && <KMam1/>}
//       </div>
//     )
//   }
// }

// export default KMam

// export class KMam1 extends Component {
//     componentWillUnmount(){
//         console.log("componentWillUnmount");
//     }
//   render() {
//     return (
//       <div>
//         <h1>remove me</h1>
//       </div>
//     )
//   }
// }

//--------------pure comp------------------------------>

// import React, { PureComponent } from 'react'

// export class KMam extends PureComponent {
//  constructor(props) {
//    super(props)

//    this.state = {
//       count:1
//    }

//  }

//   render() {
//     console.log("render");
//     return (
//       <div>
//       <h1>{this.state.count}</h1>
//         <button onClick={()=>this.setState({count:1})}>plz click me</button>
//       </div>
//     )
//   }
// }

// export default KMam

//-------------ref------------------------>

// import React, { Component } from 'react'

// export class KMam extends Component {
//  constructor(props) {
//    super(props)
//  this.inpRef = React.createRef()

//  }

// // componentDidMount(){
// //     this.inpRef.current.focus()
// // }

//   render() {
//     return (
//       <div>
//         <center>
//             <h1>i am bhiarav</h1>
//             <input type="text" name="" id="" ref={this.inpRef} />
//         </center>
//       </div>
//     )
//   }
// }

// export default KMam

//------------------------------------------->

/*
int
moun
upd
unmount   

*/

// import React, { Component } from 'react'

// export class KMam extends Component {

//     constructor(props) {
//         console.log("constructor");
//       super(props)

//       this.state = {
//          first:"Raj",
//          showcom:true
//       }
//     }

//     // moun
//     static getDerivedStateFromProps(props,state){
//         console.log("getDerivedStateFromProps");
//         return {first:props.User}

//     }

//     componentDidMount(){
//         console.log("componentDidMount");
//         this.setState({
//             first:"Rahul",
//             showcom:false
//         })
//     }

//     // update 2nd
//     shouldComponentUpdate(){
//         console.log("shouldComponentUpdate");
//         return true
//     }

//     // 3rd
//     getSnapshotBeforeUpdate(){
//         console.log("getSnapshotBeforeUpdate");
//         return null
//     }

//     componentDidUpdate(){
//         console.log("componentDidUpdate");
//     }

//   render() {
//     console.log("i am render");

//     return (
//       <div>
//         <h1>{this.state.first}</h1>
//         {this.state.showcom && <KMam1/>}
//       </div>
//     )
//   }
// }

// export default KMam

// export class KMam1 extends Component {
//      componentWillUnmount(){
//         console.log("componentWillUnmount");
//      }

//   render() {
//     console.log("hiii");
//     return (
//       <div>
//         <h1>remove me</h1>
//       </div>
//     )
//   }
// }

///----------

// import React ,{useState} from 'react'

// function KMam() {
//     const [count,setCount]=useState(0)
//     const [data,setData]=useState(100)

//     React.useEffect(()=>{
//         console.log("hiii");
//     },[count])
//   return (
//     <div>
//     <h1>{count}</h1>
//     <h1>{data}</h1>
//       <button onClick={()=>setCount(count+1)}>click count</button>
//       <button onClick={()=>setData(data+1)}>click data</button>
//     </div>
//   )
// }

// export default KMam

//--------------------------morning---------------------------------------------->

// import React ,{useState} from 'react'

// function KMam() {

//   const [count , setCount]=useState(0)
//   const [data , setData]=useState(100)
//  React.useEffect(()=>{
// console.log("i am useeefect");
//  },[data])

//   return (
//     <div>
//       <h1>{count}</h1>
//       <h1>{data}</h1>
//       <button onClick={()=>setCount(count+1)}> Count</button>
//       <button onClick={()=>setData(data+1)}>Data</button>
//     </div>
//   )
// }

// export default KMam

//--------------------------------------------------------------------->

// import axios from 'axios'
// import React, { Component } from 'react'

// export class KMam extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//        post:[]
//     }
//   }

//   async update(){
//     const res=await axios.get("https://jsonplaceholder.typicode.com/users")
//     console.log(res);
//     this.setState({
//       post:res.data
//     })
//   }

//   render() {
//     return (
//       <div>
//         {/* <h1>{this.state.post}</h1>
//         {
//           this.state.post.map((item)=> <h1>{item}</h1>)
//         } */}

//         <button onClick={()=>this.update()}>plz click me</button>

//         <table>
//           <thead>
//             <tr>
//             <td>Id</td>
//               <td>username</td>
//               <td>Email</td>

//             </tr>
//           </thead>
//           <tbody>
//             {
//               this.state.post.map((item)=>{
//                 return (
//                   <tr>
//                     <td>{item.email}</td>
//                     <td>{item.id}</td>
//                     <td>{item.username}</td>
//                   </tr>
//                 )
//               })
//             }
//           </tbody>
//         </table>

//       </div>
//     )
//   }
// }

// export default KMam

// import React, { Component } from 'react'

// export class KMam extends Component {

// constructor(props) {
//   super(props)

//   this.state = {
//      username:'',
//      password:''
//   }
// }
// subData=(e)=>{
//   const {username,password}=this.state
//   alert(`username: ${username} Password: ${password}`)
//   e.preventDefault()
// }

//   render() {
//     const {username,password}=this.state
//     return (
//       <div>
//         <form action="" onSubmit={this.subData}>
//           userName: <input type="text" name="" id="" value={username}  onChange={(event)=>this.setState({username:event.target.value})}/>
//          password : <input type="text" name="" id="" value={password}  onChange={(event)=>this.setState({password:event.target.value})} />
//          <button type="submit">Submit</button>
//         </form>
//       </div>
//     )
//   }
// }

// export default KMam

// import React, { Component } from 'react'

// export class KMam extends Component {

// constructor(props) {
//   super(props)

//   this.inRef = React.createRef()

// }

// componentDidMount(){
//   this.inRef.current.focus()
// }

//   render() {
//     return (
//       <div>
//       <h1>hiii</h1>
//        name: <input type="text" name="" id="" ref={this.inRef}  />
//       </div>
//     )
//   }
// }

// export default KMam

//--------------------------------------------

// import React , {useState}from 'react'

// function KMam() {

//   const [count , setcount]=useState(0)
//   return (
//     <div>
//     {count}
//       <button onClick={()=>setcount(count+1)}>plz click me</button>
//     </div>
//   )
// }

// export default KMam

//----------------------->


// import React from 'react'
// import { useRef } from 'react'

// function KMam() {

// const inref=useRef()

// const focustext=()=>{
//   inref.current.focus()
// }

// React.useEffect(()=>{
//   inref.current.focus()
// })

//   return (
//     <div>
//       name: <input type="text" name="" id="" ref={inref} />
//       {/* <button onClick={focustext}></button> */}
//     </div>
//   )
// }

// export default KMam

// import React from 'react'

// function KMam() {

// const inref=React.useRef()

// React.useEffect(()=>{
//   inref.current.focus()
// })

//   return (
//     <div>
//       <input type="text" name="" id="" ref={inref}/>
//     </div>
//   )
// }

// export default KMam

//------------------------>

// import React, { Component } from 'react'

// export class KMam extends Component {

//   render() {

// const {User , }=this.props

//     return (
//       <div>
// hiiii  {User}
//       </div>
//     )
//   }
// }

// export default KMam

//-------------------------------------->

/**
 
 */

// import React, { Component } from 'react'

// export class KMam extends Component {

//     constructor(props) {
//         console.log("constructor");
//       super(props)

//       this.state = {
//          name:"Raj",
//          showcom:true
//       }
//     }

//    static getDerivedStateFromProps(props,state){
//       console.log("getDerivedStateFromProps");
//       return {name:props.User}
//    }

//    componentDidMount(){
//     console.log("componentDidMount");
//     this.setState({
//         name:"Mayur",
//         showcom:false
//     })
//    }

//    shouldComponentUpdate(){
//     console.log("shouldComponentUpdate");
//     return true
//    }
//    getSnapshotBeforeUpdate(){
//     console.log("getSnapshotBeforeUpdate");
//     return null
//    }

//    componentDidUpdate(){
//     console.log("componentDidUpdate");
//    }

//   render() {
//     console.log("render");
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//        {this.state.showcom &&  <KMam1/>}
//       </div>
//     )
//   }
// }

// export default KMam

// export class KMam1 extends Component {
//     componentWillUnmount(){
//         console.log("unmount");
//     }
//   render() {
//     return (
//       <div>
//         <h1>Remove me</h1>
//       </div>
//     )
//   }
// }

//===================

// import React from 'react'

// function KMam() {

// const [count , setCount]=React.useState(0)
// const [Data , setData]=React.useState(100)

// React.useEffect(()=>{
//     console.log("i am useeefect");
// },[Data])

//   return (
//     <div>

//     <h1>{count}</h1>

//       <button onClick={()=>setCount(count+1)}>i am count</button>
// <br />
//       <h1>{Data}</h1>

//       <button onClick={()=>setData(Data+1)}>i am Data</button>
//     </div>
//   )
// }

// export default KMam

//------------------------------------------------------------------------>

// import axios from "axios";
// import React, { Component } from "react";

// export class KMam extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       Posts: [],
//     };
//   }

//   async GetData() {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/posts"
//     );
//     console.log(response);
//     this.setState({
//         Posts:response.data
//     })
//   }

//   render() {
//     const { Posts } = this.state;

//     return (
//       <>
//         <button onClick={() => this.GetData()}>Get data</button>

// {
//           Posts.map((post) => {
//             return (
//               <div key={post.id}>
//                 <h2>{post.title}</h2>
//                 <p>{post.body}</p>
//               </div>
//             );
//           })

// }

//       </>
//     );
//   }
// }

// export default KMam;

//----------------------------->

// import React, { Component } from 'react'

// export class KMam extends Component {

//     constructor(props) {
//       super(props)

//       this.state = {
//          value:true
//       }
//     }

//   render() {
//     const {value,,,,,,,} = this.state
//     var msg;
//     if (this.state.value) {
//         msg= <h1>True</h1>

//     }
//     else {
//         msg=  <h1>false</h1>
//   }
// return msg

// //  { return value ? <h1>True</h1> : <h1>False</h1> }
// //  { return value && <h1>True</h1> }
// }
// }
// export default KMam

//========

// import React, { Component } from "react";

// export class KMam extends Component {

// constructor(props) {
//   super(props)

//   this.state = {
//      userName:'',
//      password:""
//   }
// }
// getData=(e)=>{

//    alert(`username: ${this.state.userName} password: ${this.state.password}`)
//    e.preventDefault()
// }



//   render() {
//     const { userName, password } = this.state
    
//     return (
//       <div className="container">
//         <form action="" onSubmit={this.getData}>

//           <div className="row">value={userName} onChange={(e)=>this.setState({userName:e.target.value})}/>
//           </div>
//             <label htmlFor="">User Name</label>
//             <input type="text" name="" id="" 




//           <div className="row">
//             <label htmlFor="">password</label>
//             <input type="password" name="" id=""  value={password} onChange={(e)=>this.setState({password:e.target.value})} />
//           </div>



//           <div>
//             <button type="submit">submit</button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default KMam;


////////////////////////////////////////

// uncontrold


// import React, { useState } from 'react'



// const KMam = () => {
// const [val ,setval]=useState("10")

//   return (
//     <div>
//      <input type="text" name="" id="" value={val}  onChange={(e)=>setval(e.target.value)}/>
//      {val}
//     </div>
//   )
// }

// export default KMam




//---------uncontroled-------------//


// he state mdun controll hot nhi ksi pn hote...direct dom ke andar manuplation

// import React from 'react'
// import { useRef } from 'react'

// const KMam = () => {
//     let inputRef=useRef(null)

//    const subdata=(e)=>{
//        e.preventDefault()
//        console.log(inputRef.current.value)
//     }


//   return (
//     <div>
//        <form action="" onSubmit={subdata}>
//        <input type="text" name="" id="" ref={inputRef}/>
//         <br />
//         <input type="text" name="" id="" />
//         <br />
//         <button>submit</button>
//        </form>
//     </div>
//   )
// }

// export default KMam



//------------------------hoc--------------
