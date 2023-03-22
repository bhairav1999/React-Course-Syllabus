import React,{useMemo} from "react";

const Memo = () => {
  const [count, setCount] = React.useState(0);
  const [item, setItem] = React.useState(10);


  const multicountMemo = useMemo(function multicount() {
    console.log(multicount);
    return count*5
  },[count]);
  
  

  return (
    <div className="text-center mt-5">
      <button onClick={() => setCount(count + 1)}>Count</button>
      <br />
      <div>
        <p>{count}</p>
       
      </div>
      <button onClick={() => setItem(item + 1)}>item</button>
      <div>
      <p>{item}</p>
      </div>
      <h1>{multicountMemo}</h1>
    </div>
  );
};

export default Memo;
