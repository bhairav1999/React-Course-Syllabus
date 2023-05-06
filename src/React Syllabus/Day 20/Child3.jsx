import React, { useContext } from 'react';

import { msgcontext } from './UseContextHooks'; 



const Child3 = () => {
  const msg=useContext(msgcontext)
  return (
    <div>
      <h1>child3 :- {msg}</h1>
    </div>
  );
}

export default Child3;
