import React, { useEffect, useState } from 'react';

const UseEffectHooks = () => {  

    const [count , setcount]=useState(0)
    const [data , setdata]=useState(100)

useEffect(()=>{
    console.log("i am effect")
},[data])


  return (
    <div>
      <h1>{count}</h1>
      <br />
      <button onClick={()=>setcount(count+1)}>count</button>
      <h1>{data}</h1>
      <br />
      <button onClick={()=>setdata(data+1)}>data</button>
    </div>
  );
}

export default UseEffectHooks;
