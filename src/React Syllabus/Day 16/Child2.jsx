import React from 'react';
import Child3 from './Child3';

const Child2 = (props) => {
  return (
    <div>
    {/* <h1>{props.value}</h1> */}
      <Child3  value={props.value}/>
    </div>
  );
}

export default Child2;
