



// import React from 'react'
// import { useState } from 'react'


// const HocStep = () => {
//   return (
//     <div>
//       <HOC cmp={Counter} />
//       <HOC1 cmp={Counter} />

    
     
//     </div>
//   )
// }
// function HOC(props){
//   return (
// <>
//   <h1><props.cmp/></h1>
// </>
//   )
// }
// function HOC1(props){
//   return (
// <>
//   <h2><props.cmp/></h2>
// </>
//   )
// }



// function Counter(){
//   const [val , setval]=useState(0)
//   return (
//     <>
//   {val}
//   <button onClick={()=>setval(val+1)}>submit</button>
//     </>
//   )
// }

// export default HocStep

// //-------------------------------//----------------------------------------------------------------




// // import React, { useState } from "react"

// // const HocStep=()=>{
// //   const [data , setdata]=useState()

// //   const dataget =()=>{
// //     alert(data)
// //   }

// //   return (
// // <>
// // <form action="" onSubmit={dataget}>
// // <input type="text" name="" id="" value={data}  onChange={(e)=>{setdata(e.target.value)}} />
// //  <input type="text" name="" id="" />
// //  <button> submit</button>
// // </form>
// // </>
// //   )
// // }
// // export default HocStep




// import React, { useReducer } from 'react'

// const initialstate =5

// const reducer= (state , action)=>{
// if(action.type === "increment"){
//   return state +1
// }else{
//   return state -1
// }
// }



// function HocStep() {

//   const [state , dispatch]=useReducer(reducer , initialstate)


//   return (
//    <>
//    {state}
// <button onClick={()=>dispatch({type:"increment"})}>click</button>
// <button onClick={()=>dispatch({type:"decrement"})}>plz</button>

//    </>
//   )
// }

// export default HocStep



// import React, { useReducer } from 'react';
// const intialstate=0
// const reducer=(state,action)=>{
//    if (action.type==="increment") {
//      return state +1
//    }else{
//     return state -1
//    }
// }

// const HocStep = () => {
//   const [state, dispatch]=useReducer(reducer,intialstate)
//   return (
//     <div>
//     {state}
//       <button onClick={()=>dispatch({type:"increment"})}>inc</button>
//     </div>
//   );
// }

// export default HocStep;




//---------------------------------------------------------------//



// import React from 'react'
// import { useState } from 'react'

// const HocStep = () => {

//     const [shwo , setshow]=useState()
//     const [shwo1 , setshow1]=useState()


// const getdata=(e)=>{
//     console.table();
    
// }




//   return (
//     <div>
      
// <form action="" onSubmit={getdata}>
// <input type="password" name="" id="" value={shwo}  onChange={(e)=>setshow(e.target.value)}/>
// <br />
// <input type="password" name="" id=""  value={shwo1}  onChange={(e)=>setshow1(e.target.value)}/>
// <br />
// <button>submit</button>
// </form>


//     </div>
//   )
// }

// export default HocStep





// import React, { useState } from 'react';

// const HocStep = () => {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//     } else {
//       setError(null);
//       // Submit form to server...
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="confirmPassword">Confirm Password:</label>
//         <input
//           type="password"
//           id="confirmPassword"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />
//       </div>
//       {error && <div style={{ color: 'red' }}>{error}</div>}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default HocStep;


//--------------------------


// import React, { useState } from 'react'

// const HocStep = () => {
//     return (
//         <div>
//             <Live3 user={Live1} />
//             <Live5 user={Live1} />
//         </div>
//     )
// }

// function Live3(props) {
//     return <h3 className='bg-primary'><props.user/></h3>
// }

// function Live5(props) {
//   return <h3 className='bg-danger'><props.user/></h3>
// }


// const Live1 = () => {
//     const [count, setcount] = useState(0)
//     return (
//         <div>
//             <h3>{count}</h3>
//             <button onClick={() => setcount(count + 1)}>click</button>
//         </div>
//     )
// }

// export default HocStep




// --------------pure comp------------------------------>

// import React, { PureComponent } from 'react'

// export class HocStep extends PureComponent {
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
//         <button onClick={()=>this.setState({count:this.state.count+1})}>plz click me</button>
//       </div>
//     )
//   }
// }

// export default HocStep




//------------------------------->




