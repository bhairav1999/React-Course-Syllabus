import React, { useState } from 'react';
import Child1 from './Child1';

const PropsDrilngInFunctionComponents = (props) => {
    const [show , setshow]=useState("hello raj")
  return (
    <div>
      <Child1 value={show}/>
    </div>
  );
}

export default PropsDrilngInFunctionComponents;
