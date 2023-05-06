import React, { useState } from "react";

const HOComponents = () => {
  return (
    <div>
      <Hoc cmp={Counter} />
      <Hoc2 cmp={Counter} />
    </div>
  );
};

// first function

function Hoc(props) {
  return <props.cmp />;
}

/// second function
function Hoc2(props) {
  return (
    <>
      <h1 className="btn-danger">
        <props.cmp />
      </h1>
    </>
  );
}

const Counter = () => {
  const [show, setshow] = useState(0);
  return (
    <div className="text-center mt-5">
      <h1>{show}</h1>
      <br />
      <button onClick={() => setshow(show + 1)}>Counter</button>
    </div>
  );
};

export default HOComponents;

//  one btn 5

// btn   +
// btn
// btn
// btn
// btn
// btn
