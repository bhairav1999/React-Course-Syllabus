//--------  class component-----------//



// import React, { Component } from 'react'

// export class AllReact extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }

// export default AllReact

// ------function component------------//

// import React from 'react'

// function AllReact() {
//   return (
//     <div>
//       hiii fun
//     </div>
//   )
// }

// export default AllReact

// ---------------fargment-------------------//

//      <React.Fragment></React.Fragment>
//       <Fragment></Fragment>
//        <>  </>

// -----------------function expression----------------------//

// first way

// function AllReact() {
//   return (
//     <div>
//       hii
//     </div>
//   )
// }

// export default AllReact



// second way-----

// const AllReact = function () {
//   return <>hiiii</>;
// };
// export default AllReact;



// ---- multiline function----------------//

// const AllReact = ()=> {
//       return <>hiiii</>;
//     };
//     export default AllReact;
    



// ----------- singleline function----------------//

// const AllReact = ()=> (
//      <>hiiii</>
// );
//   export default AllReact;
  
//-----------jsx conditional add----------//

// import React from 'react'
// const AllReact=()=>{
//     let age=20
//     return(
//         <>
//             <h1>jsx</h1>
//             <h1>jsx{1+1}</h1>
//             <h1>jsx{age>10 ? "raj" : "rahul"}</h1>

//         </>
//     )
// }
// export default AllReact;


//----------props fun com--------------------//

// import React from 'react'

// function AllReact(props) {
//   return (
//     <div>
//       <h1>hello{props.name}</h1>
//     </div>
//   )
// }

// export default AllReact


//----------------------props class-------------------//

// import React, { Component } from 'react'

// export class AllReact extends Component {
//   render() {
//     return (
//       <div>
//         <h1>hello{this.props.name}</h1>
//       </div>
//     )
//   }
// }

// export default AllReact



// import React, { Component } from 'react'

// export class AllReact extends Component {
//   render() {
//     const {name}=this.props
//     return (
//       <div>
//         <h1>hello{name}</h1>
//       </div>
//     )
//   }
// }

// export default AllReact


//------------------destring function-------------------//

// import React from 'react'

// function AllReact({name}) {
//   return (
//     <div>
//       <h1>hello{name}</h1>
//     </div>
//   )
// }

// export default AllReact



//---------------------state----------------------------//

// import React, { Component } from 'react'

// export class AllReact extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          msg:"hello raj"
//       }
//     }
//    Update(){
//         this.setState({
//             msg:"hello bhairav"
//         })
//     }
    
//   render() {
//     return (
//       <div>
//         <h1>{this.state.msg}</h1>
//         <button onClick={()=>{this.Update()}}>name</button>
//       </div>
//     )
//   }
// }

// export default AllReact




//---------------ReactStateInClassComp


// import React, { Component } from 'react';

// class AllReact extends Component {
    
//     constructor(){
//         super()
        
//         this.state = {
//             message:"Welcome ",
//             name:"Ramesh",
//             city:'Pune'
//         }
        
//     }
//     chnageMessage(){
//         this.setState(
//             {
//                 message: "Farewell... ",
//             },
            
//         )
       
//     }

//     render() {

//         const {message,name,city}=this.state

//         return (
//             <div>
//                 <h1>React state </h1>
//                  { message}
//                 <h2>Name:{ name}</h2>
//                 <h2>City:{ city}</h2>
//                 <br />
//                 <button onClick={this.chnageMessage.bind(this)}>Change Message </button>
//             </div>
//         );
//     }
// }

// export default AllReact;



//-----------------------event binding-------------------//

// import React, { Component } from 'react';

// class AllReact extends Component {
//     constructor() {
//         super();
//         //Binding Event Handler in the Constructor
//         //this.chageMessage =this.chageMessage.bind(this)

//         this.state ={
//             message:'Welcome'
//         }
//     }

//     chageMessage(){
//         this.setState({
//             message:'Farewell..'
//         })
//         console.log(this)
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Event Binding</h1>
//                 {this.state.message}
//                 {/* Binding Event Handler in Render Method */}
//                 {/* <button onClick={this.chageMessage.bind(this)}>Click me</button> */}
//                 {/* Binding Event Handler using Arrow Function */}
//                 <button onClick={()=>this.chageMessage()}>Click me</button>

//                 {/* <button onClick={this.chageMessage}>Click me</button> */}
//             </div>
//         );
//     }
// }

// export default AllReact;


//---------------------------chaild to parent-------------------------------------------//

// ---> parent---->
// import React, { Component } from 'react'
// import Pri from './Pri'

// export class AllReact extends Component {
//     getdata(msg){
//         alert(`parent ${msg}`)

//     }
//   render() {
//     return (
//       <div>
//         <Pri funName={this.getdata}/>
//       </div>
//     )
//   }
// }

// export default AllReact



//---------------------conditional ------------------------


// import React, { Component } from 'react';

// class AllReact extends Component {
   
//    //rconst
//     constructor(props) {
//       super(props)
    
//       this.state = {
//         isLoggedIn:false
//       }
//     }
    
//     render() {
//         // using if else 
//         // if (this.state.isLoggedIn) {
//         //     return <div> <h1>Welcome Ramesh</h1> </div>
//         // } else {
//         //     return <div> <h1>Welcome Guest</h1> </div>
//         // }

//         //using variable 
//         // let message;
//         // if (this.state.isLoggedIn) {
//         //     message = <div> <h1>Welcome Ramesh</h1> </div>
//         // } else {
//         //     message =  <div> <h1>Welcome Guest</h1> </div>
//         // }
//         // return message


//         //conditional/ternary operator-----use bhairu
//        return this.state.isLoggedIn ? <div> <h1>Welcome Ramesh</h1> </div> :  <div> <h1>Welcome Guest</h1> </div>

//         //short circit 
//     //    return this.state.isLoggedIn && <div> <h1>Welcome Ramesh</h1> </div>
//     }
           
// }

// export default AllReact;



//---------------------------------list rendring-------------------//

// import React, { Component } from "react";
// import axios from "axios";
// // import "./List.css";
// class AllReact extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//     //   usersData: ["Ramesh", "Sachin", "Umesh", "Mahesh", "Yogita", "Pooja"],
//       users: [],
//     };
//   }

//   async getUsersData() {
//     const usersRes = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     console.log(usersRes);

//     this.setState({
//       users: usersRes.data,
//     });
//   }
//   render() {
//     // const {users} = this.state.usersData
//     return (
//       <div>
//         <h1>List redering</h1>
//         <button onClick={() => this.getUsersData()}>Get Data</button>
//         {/* <h1>{ this.state.usersData[0]}</h1>
//                 <h1>{ this.state.usersData[1]}</h1>
//                 <h1>{ this.state.usersData[2]}</h1>
//                 <h1>{ this.state.usersData[3]}</h1>
//                 <h1>{ this.state.usersData[4]}</h1>
//                 <h1>{ this.state.usersData[5]}</h1> */}
//         {/* {
//                     this.state.usersData.map((user)=><h1>{user}</h1>)
//                 } */}

//         {this.state.users.map((user) => {
//           return (
//             <table >
//               <thead>
//                 <tr>
//                   <td scope="col">key={user.id}</td>
//                   <td scope="col">name:{user.name}</td>
//                   <td scope="col">email:{user.email}</td>
//                 </tr>
//               </thead>
//             </table>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default AllReact;



//-------------------------------------------------------------------------------------------//
//-----------------usestate-------------------------//


// import React,{useState} from 'react'

// function AllReact() {
//     const [data,setData]=useState("Raj")
//   return (
//     <div>
//       <h1>hiiii {data}</h1>
//     <button onClick={()=>setData("Bhairav")}>Data</button>
//     </div>
//   )
// }

// export default AllReact



// -----------------useeffect-----------------------//

// option lifecycle

// import React, { useState } from 'react'

// function AllReact() {
//     const [count ,setcount]=useState(0)
//     React.useEffect(()=>{
//        console.log("useEffect")  //comdidmount ude class
//     })
//     React.useEffect(()=>{
//         console.log("useEffect 1")  // dobble use kley kitipn kru shkto
//      })
//   return (
//     <div>
//       <h1>hiii {count}</h1>
//       <button onClick={()=>setcount(count+1)}>update</button>
//     </div>
//   )
// }

// export default AllReact



//  useeffect specific calll------------------------//


//------------refs----------------//


// import React, { Component } from 'react'

// export class Welcome1 extends Component {
//     constructor(props) {
//       super(props)
    
//      this.inputRef = React.createRef()
    
     
//     }
//     componentDidMount(){
//         this.inputRef.current.focus()
//     }
    
//   render() {
//     return (
//       <div>
//          <label> username</label>
//          <input type="text" ref={this.inputRef} />
        
//       </div>
//     )
//   }
// }

// export default Welcome1

//----------------------------life cycle----------------------//

// import React, { Component } from 'react'

// export class AllReact extends Component {
//     constructor(props) {
//       super(props)
//       console.log("constructor")
    
      
//     }
//     // and another lifecycle
//     componentDidMount(){
//         console.log("comidi")
//     }
    
//   render() {
//     console.log("render")
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

// export default AllReact


// // api call krni hain---agar api constor main add kr di ...our apko add krni hain html ke sath to error
// // karann constror redy hoil to pryant render redy nhi huva html bnlela nsel ....mng ti elment shodel pn bhetnar nhi

// // comdid---api addd ----------html redy asto teva 

//---------------------component didmount--------------------------------//

// import React, { Component } from 'react'

// export class AllReact extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          data:null
//       }
//       console.log("constructor")
//     }
    
//     // and another lifecycle
//     componentDidMount(){
//         this.setState({data:"update"})
//         console.log("comidi")
//     }
    
//   render() {
//     console.log("render")
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

// export default AllReact


// ---------------compdid updare------------------//

// lc methos state update .....comdidupdate..call honar

// import React, { Component } from 'react'

// export class AllReact extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          active:null,
//          who:null
//       }
//       console.log("constructor")
//     }
    
//     // and another lifecycle
//     componentDidUpdate(){
    
//         console.log("comidi")
//         if (this.state.who==null) {   // sirf ek bar click nntr condition cjya baher alay
//             this.setState({who:"update"})
//         }
       
//     }
    
//   render() {
//     console.log("render")
//     return (
//       <div>
//       <h1>hiii{this.state.who}</h1>
//         <button onClick={()=>{this.setState({active:"yes"})}}>cliclk</button>
//       </div>
//     )
//   }
// }

// export default AllReact


//------------------------comwillunmount------------------------//


// unmount ke pahle call 



// import React, { Component } from 'react'

// export class AllReact extends Component {
//   componentWillUnmount(){
//     alert("user has benn delete")
//   }
//   render() {
//     return (
//       <div>
//         <ul>
//           <li>Name: Anil</li>
//           <li>Email: bk@gmail.com</li>
//         </ul>
//       </div>
//     )
//   }
// }

// export default AllReact





//-------------------------------morning----------------------------------//

// import React ,{useState} from 'react'

// function AllReact() {
//     const [data , SetData]=useState("Raj")
//   return (
//     <div>
//       <h1> hello {data}</h1>
//       <button onClick={()=>SetData("Bhairav")}>Change State</button>
//     </div>
//   )
// }

// export default AllReact


//-----------------------------------------//

// import React, {  PureComponent } from 'react'

// export class AllReact extends PureComponent{
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          msg:1
//       }
//     }
//     UpdateName=()=>{
//         this.setState({
//             msg:1
//         })
//     }
    
//   render() {
//     console.log("re rendering")
//     return (
//       <div>
//         <h1>hello PureCom:- {this.state.msg} </h1>
//         <button onClick={this.UpdateName}>Change name</button>
//       </div>
//     )
//   }
// }

// export default AllReact



// -------------------------->



// import React, { Component } from 'react';

// class AllReact extends Component {
//     constructor(props) {
//       super(props)
//     //create ref
//       this.inputRef = React.createRef()
      
//     }
//     //access and add focus to it
//     componentDidMount(){
//         this.inputRef.current.focus();
//     }
//     render() {
//         return (
           
//             <form>
//                 <div className='center'>
//                     Login Form
//                 </div>
//                 <div className='center'>
//                     <label >User Name </label>
//                     <input type="text" name="" id=""  ref={ this.inputRef} />
//                     {/* Attach ref to element */}
//                 </div>
//                 <div className='center'>
//                     <label >Password </label>
//                     <input type="password" name="" id="" />
//                 </div>
//                 <div className='center'>
//                    <button type='submit'> Submit</button>
//                 </div>

//             </form>
           
//         );
//     }
// }

// export default AllReact;




//-------------------------useEffect--------------------------------><-----------------------------------------------------------//


// import React, { Component } from 'react'

// export class AllReact extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        user:"rahul",
//        fname:"karande"
//     }
//   }
//   update(){
//     this.setState(
//       {
//       user:"ram",

//     },()=> console.log(this.state.user)
//     )
//   }
  
  
//   render() {
//     const {fname , user}=this.state
//     return (
//       <div>
//         <h1>
//           {/* {this.state.user}
//           {this.state.fname} */}

//           {fname}
//           {user}
//           <button onClick={this.update.bind(this)}>update</button>
//         </h1>

//       </div>
//     )
//   }
// }

// export default AllReact


// // {this.state.message}
// //                 {/* Binding Event Handler in Render Method */}

// //                 {/* <button onClick={this.chageMessage.bind(this)}>Click me</button> */}

// //                 {/* Binding Event Handler using Arrow Function */}
// //                 <button onClick={()=>this.chageMessage()}>Click me</button>

// //                 {/* <button onClick={this.chageMessage}>Click me</button> */}




//----------------------conditional rending----------------------------------//


// import React, { Component } from 'react'

// export class AllReact extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        islogin:true
//     }
//   }
  
//   render() {
    
//       //using if else 
//         // if(this.state.islogin){
//         //   return <h1>hi is true</h1>
//         // }else{
//         //   return <h1>is false</h1>
//         // }

//         // let msg;
//         // if(this.state.islogin){
//         //   msg= <h1>hiiiiii</h1>
//         // }else{
//         //   msg= <h2>helooo</h2>
//         // }
//         // return msg

//         // return this.state.islogin ? <h1>hiiiii</h1> : <h2>helllo</h2>

//         return this.state.islogin && <h1>hiiiii</h1> 


        
//   }
  
// }

// export default AllReact




//-----------------list ren----------------------------//



// import React, { Component } from 'react'
// import axios from 'axios'

// export class AllReact extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//       //  nmae:["data","life","sam","new"]
//       users:[]
//     }
//   }
//   async getUsersData() {
//     const usersRes = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     console.log(usersRes);

//     this.setState({
//       users: usersRes.data,
//     });
//   }
//   render() {
//     return (
//       <div>
//         {/* <h1>{this.state.nmae[0]}</h1>
//         <h1>{this.state.nmae[1]}</h1>
//         <h1>{this.state.nmae[2]}</h1>
//         <h1>{this.state.nmae[3]}</h1> */}
//        {/* {this.state.nmae.map((user)=><h1>{user}</h1>)} */}

// <button onClick={()=>{this.getUsersData()}}>hiiii</button>
// {this.state.users.map((user)=>{ 
//   return <h1 key={user.id}>name: {user.name} email: {user.email}</h1>
// })
// }

       
//       </div>
//     )
//   }
// }

// export default AllReact



//---------------------from--------------------------------------//


// import React, { Component } from 'react'


// export class AllReact extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        name:"",
//        password:""
//     }
//   }
//   changeName=(event)=>{
//     this.setState({
//       name:event.target.value
//     })

//   }
//   changepassword=(event)=>{
//     this.setState({
//       password:event.target.value
//     })

//   }

//   submitdat=(event)=>{
//    alert(`Name:${this.state.name} password: ${this.state.password} `)
//    event.preventDefault()
//   }
  
//   render() {
//     return (
//       <form className='container , mt-5' onSubmit={this.submitdat}>
// Name: <input type="text" value={this.state.name} onChange={this.changeName}/>
// password: <input type="password" value={this.state.password} onChange={this.changepassword} />
// <button type='submit'>submit</button>


//       </form>
//     )
//   }
// }

// export default AllReact



//------------------life cycle---------------------//

// component create hoto teva const call hoto


import React, { Component } from 'react'

export class AllReact extends Component {
  constructor(props) {   // 1st inshilation const mde krto
    console.log("constructor")
    super(props)
  
    this.state = {
       first:"rahul",    // state insilize zali...
       showcom:true
    }
  }

  // 2nd mounting
  // com create zalela ahe and intializtion pn kely .. intializtion zalya zalya comp ui vrti render hoyla redy asto.....ajun render nhi zala
  //  1st mounting---> getderivedstatefromprpos
    // ui vrti render hoychya agodar state  update kraychi asel tr.....
  static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps")
    return {first:props.user}
  }

  // mounting---3rd comdidmount--- render zalyavr /....comdidmount----pkt ekda exucute hote......render zalyave hoti
  // most use API
  componentDidMount(){
    console.log("componentDidMount")
       this.setState({
        first:"ram",
        showcom:false
       })               // ith state change kru mnje updating krta yeil---getprpos
  }
  

  // update---> prpos and state change zalyavr....
  // 2nd update---->shouldcompupdate--->true false
  //  agodarchi state and atachi state same asel tr render krt nhi an nsel tr krte render

shouldComponentUpdate(){
  console.log("shouldComponentUpdate")
  return true   //com_update mde check hot ki update kraych ahe ka nhi
}

// updating 3d--->getsnapshotbeforeupdate
// ajun apla comp update zala nhi... com_update mde check hot ki update kraych ahe ka nhi
// agodarchi state and new state cha snapshot kadun tevla jato pkt
getSnapshotBeforeUpdate(){
  console.log("getSnapshotBeforeUpdate")
  return null
}

// update 4th ----comdidupdate
// jeve comp update houn sccscfull render zalela ahe..{}.jar changes astil tr render nhi honar ,,,,jr nsel,,tr render honar 

componentDidUpdate(){
  console.log("componentDidUpdateupsate")
}

  render() {
    // 2nd mounting --render----> mnje ch apla comp ui vrti scsful zala
    console.log("render")
    return (
      <div>
        <h1>{this.state.first}</h1>
        {this.state.showcom && <AllReact1 />}  
      </div>
    )
  }
}

export default AllReact


// unmounting----com succ render zalela ahe an remove kraycha asel tr
 //comwillunmounting // remove hoychya addi call hote



export class AllReact1 extends Component {
  componentWillUnmount(){   
    console.log("componentWillUnmount")
  }
  render() {
    return (
      <div>
        <h1>remove </h1>
      </div>
    )
  }
}


// ---------------------------------------------------------------------// purecomp

// import React, { Component } from 'react'

// export class AllReact extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        count:1
//     }
//   }
//   update(){
//     this.setState({
//       count:this.state.count+1
//     })
//   }
  
//   render() {
//     console.log("render")
//     return (
//       <div>
//         {this.state.count}
//         <button onClick={()=>{this.update()}}>state</button>
//       </div>
//     )
//   }
// }

// export default AllReact


///------------------------------------------------------//


 
//  -----------//


// import React, { Component } from 'react'

// export class AllReact extends Component {
//   render() {
//     return (
//       <div>
//         <h1>hiii  {this.props.user}</h1>
//       </div>
//     )
//   }
// }

// export default AllReact





// import React from 'react'

// function AllReact(props) {
//   return (
//     <div>
//       <h1>hiii  {props.user}</h1>
//     </div>
//   )
// }

// export default AllReact

//----------------------------------------------------//


// import React, { Component } from 'react'

// export class AllReact extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

// export default 





//-----------life----------------------------------//



// import React, { Component } from 'react'

// export class AllReact extends Component {

//   constructor(props) {
//     console.log("constructor")
//     super(props)
  
//     this.state = {
//        name:"modi"
//     }
//   }
  
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

// export default AllReact



//------------------------------------------------------------------//

// import React, { Component } from 'react'

// export class AllReact extends Component {
//   render() {
//     console.log(this.props.user)
//     return (
//       <div>
//         {this.props.name}
//       </div>
//     )
//   }
// }
// AllReact.defaultprops={
//  name:"hiii"
// }

// export default AllReact



//------------------------------------------//

// import React, { Component } from 'react'

// export class AllReact extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        msg:"hello Rohit"
//     }
//   }
  // update(){
  //   this.setState({
  //     msg:"Rohit"
  //   })
  // }
  
//   render() {
//     return (
//       <div>
//         <h1>hello state{this.state.msg}</h1>
//        <button onClick={()=>{this.setState({msg:"hiiii"})}}>click</button>
//       </div>
//     )
//   }
// }

// export default AllReact


//----------------------------------------------------------------------------------------------------------------------//

// import React, { Component } from 'react'
// export class AllReact extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//       UserName:"Modi1777",
//       FirstName:"Rohit",
//       LastName:"Sharma",
//       Age:90,
//       City:"Pune"
//     }
//   }
//   render() {
//       const {UserName,FirstName}=this.state
//     return (
//       <div>
//         {FirstName}
//           <br />
//         {UserName}
//       </div>
//     )
//   }
// }
// export default AllReact


//-------------------------------------------------------------------------------------------------------------------------//


// import React, { Component } from 'react'

// export class AllReact extends Component {
//   constructor(props) {
//     super(props)
//     this.update=this.update.bind(this)
//     this.state = {
       
//     }
//   }

//   update(){
//     console.log(this);
//   }
  
//   render() {
//     return (
//       <div>
//       {/* <button onClick={()=>{this.update()}}>click</button> */}
//       {/* <button onClick={this.update.bind(this)}>click</button> */}
//       <button onClick={this.update}>click</button>
//       </div>
//     )
//   }
// }

// export default AllReact



//-----------------------------------conditional--------------------------------------------------//

// import React, { Component } from 'react'

// export class AllReact extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//       UserName:"Modi1777",
//       FirstName:"Rohit",
//       LastName:"Sharma",
//       Age:90,
//       City:true
//     }
//   }
  
//   render() {
//     // if(this.state.City){
//     //   return <h1>hello</h1>
//     // }else{
//     //   return <h1>false</h1>
//     // }
    
//     // var msg;
//     // if(this.state.City){
//     //   msg= <h1>hello</h1>
//     // }else{
//     //   msg= <h1>hii</h1>
//     // }
//     // return msg

//     //  return this.state.City ? <h1>helllo</h1> : <h2>hiiii</h2>

//     return this.state.City && <h1>helllo</h1>

//   }
// }

// export default AllReact



//---------------------------------------------------------------------------------------------//



// import React, { Component } from 'react'
// import axios from 'axios'
// export class AllReact extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//       //  user:["Rohit","Raj","Ram","Rahul","Ravan"]
//       userId:[]
//     }
//   }

//   async update(){
//     const result= await axios.get("https://jsonplaceholder.typicode.com/users")
//    this.setState({
//     userId:result.data
//    })
//   }
  
//   render() {
//     return (
//       <div>
//         {/* {this.state.user[4]}
//         <br />
//         {this.state.user[3]}
//         <br />
//         {this.state.user[2]}
//         <br />
//         {this.state.user[1]}
//         <br /> */}

//         {/* {this.state.user.map((name)=><h1>{name}</h1> )} */}

//       <button onClick={()=>this.update()}>Click</button>
//       {/* {
//         this.state.userId.map((name)=>{
//           return <h1 key={name.id}>{name.email}</h1>
//         })
//       } */}

//       {this.state.userId.map((name)=>{
//          return (
//           <table>
//           <th>
//             <tr>
//               <td>{name.id}</td>
//               <td>{name.email}</td>
              
//             </tr>
//           </th>


//           </table>
//          )
//       })}


        
//       </div>
//     )
//   }
// }

// export default AllReact


//-----------------------------------------------------------------------------//


