import React, { useState } from 'react';

const UseStateHooks = () => {
    const [show , setShow]=useState("hello")
  return (
    <div>
      <h1>{show}</h1>
      <button onClick={()=>setShow("love")}>click</button>
    </div>
  );
}

export default UseStateHooks;
