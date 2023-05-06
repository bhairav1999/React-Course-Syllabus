import React, { useEffect, useRef } from 'react';

const UseRefHooks = () => {
    
    const inputref=useRef()

    // useEffect(()=>{
    //     inputref.current.focus()
    // })

    const getshow=()=>{
        inputref.current.focus()
    }
  return (
    <div>
      <input type="text" name="" id="" ref={inputref}/>
      <button onClick={()=>getshow()}>click</button>
    </div>
  );
}

export default UseRefHooks;
