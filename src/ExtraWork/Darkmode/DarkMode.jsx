import React from "react";
import "./DarkMode.css";

const DarkMode = () => {
  return (
    <>
      <div className="container d-flex navbarPosition ">
        <div className="me-5">
          <a href="">Home</a>
        </div>
        <div className="me-5">
          <a href="">Contact</a>
        </div>
        <div className="me-5">
          <a href="">About</a>
        </div>
      </div>


      {/* img */}
      <div className="d-flex justify-content-evenly margDark">
        <div className="me-5 ">
          <h1>I am Dark mode</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
            Optio exercitationem molestias nulla magni qui? Quas autem
            recusandae quos eligendi iusto!
          </p>
        </div>
        <div>
          <img
           src="https://pbs.twimg.com/media/https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fkarandebhairav&psig=AOvVaw3LKA7HIqgJuVS7E0oMTaam&ust=1674024814688000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCODdv4iDzvwCFQAAAAAdAAAAABAE?format=jpg&name=large" alt="p"
          height={"200px"} width={"00px"}/>
        </div>
      </div>

<div></div>

    </>
  );
};

export default DarkMode;
