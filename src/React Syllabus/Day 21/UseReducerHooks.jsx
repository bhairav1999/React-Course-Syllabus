import React,{useReducer} from 'react';



const initialstate=0

const reducer=(state,action)=>{
  if(action.type=== "increment"){
    return state +1
  }else{
    return state -1
  }
}



const UseReducerHooks = () => {


const [state,dispatch]=useReducer(reducer,initialstate)

  return (
    <div className='text-center mt-5'>
    
      <button className='btn-primary' onClick={()=>dispatch({type:"increment"})}>Increment</button>
      <br />
      <br />
      <h1>{state}</h1>
      <br />
      <button className='btn-danger' onClick={()=>dispatch({type:"decrement"})}>decrement</button>
    </div>
  );
}

export default UseReducerHooks;
