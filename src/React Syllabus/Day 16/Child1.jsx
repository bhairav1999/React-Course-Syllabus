import React from 'react';
import Child2 from './Child2';

const Child1 = (props) => {
  return (
    <div>
    {/* <h1>{props.value}</h1> */}
      <Child2 value={props.value}/>
    </div>
  );
}

export default Child1;
