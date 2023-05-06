import React, { useState ,createContext} from 'react';
import Child1 from './Child1';
export const msgcontext=createContext()
const UseContextHooks = () => {

const [data , setdata]=useState("i am raj")


  return (
    <div>
      <msgcontext.Provider value={data}>
        <Child1/>
      </msgcontext.Provider>
    </div>
  );
}

export default UseContextHooks;
