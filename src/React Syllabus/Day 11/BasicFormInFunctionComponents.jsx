import React, { useState } from "react";

const BasicFormInFunctionComponents = () => {
  const [showdata, setShowData] = useState({
    id: "",
    name: "",
    mobile: "",
  });

  const [errors, setError] = useState(null);

  const getdata = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setShowData({ ...showdata, [name]: value });
  };

  const subdata = (e) => {
    e.preventDefault();
    if (showdata.name && showdata.mobile && showdata.id) {
      console.log(showdata);
    } else {
      setError("plz all fild");
    }
  };

  return (
    <div>
      <form action="" onSubmit={subdata}>
        <label className="ms-3" htmlFor="id">
          Id
        </label>
        <input
          type="text"
          name="id"
          id=""
          className=" form-control w-25 ms-3"
          value={showdata.id}
          onChange={(e) => getdata(e)}
        />
        <label className="ms-3" htmlFor="id">
          Name
        </label>
        Name:{" "}
        <input
          type="text"
          name="name"
          className=" form-control w-25 ms-3"
          id=""
          value={showdata.name}
          onChange={(e) => getdata(e)}
        />
        <label className="ms-3" htmlFor="id">
          Mobile
        </label>
        Mobile:{" "}
        <input
          type="text"
          name="mobile"
          className=" form-control w-25 ms-3"
          id=""
          value={showdata.mobile}
          onChange={(e) => getdata(e)}
        />
        {errors && errors}
        <button className=" l  m-3">Submit</button>
      </form>
    </div>
  );
};

export default BasicFormInFunctionComponents;
