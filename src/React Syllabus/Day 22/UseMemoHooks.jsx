import React, { useMemo, useState } from 'react';

const UseMemoHooks = () => {
    const [count , setcount]=useState(0)
    const [data , setdata]=useState(100)

    const muticount=useMemo(function greet(){
        return data+5
    },[data])

  return (
    <div className='text-center'>
    <h1>{count}</h1>
      <button onClick={()=>setcount(count+1)}>count</button>
      <h2>{data}</h2>
      <button onClick={()=>setdata(data+1)}>data</button>
        <br /><h3>{muticount}</h3>
    </div>
  );
}

export default UseMemoHooks;
