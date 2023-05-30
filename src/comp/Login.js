import React from "react";

import "./login.css";
export const Login = () => {
  return (
    <div>
      <div className="head">
        <h1 style={{ float: "left" }}> FRIENDS DATABASE </h1>
        <div style={{ float: "right" }}>
          <button className="btn">Login</button>
          <button className="btn">FRIENDLIST.</button>
          <button className="btn">ADD FRIENDS.</button>
          <button className="btn">LOGOUT</button>
        </div>
      </div>
      <hr id="cizgi" />
      <div className="container">
        <div className="ortaContainer">
          <h1>LOGIN</h1>
          <div>
            <input type="text" placeholder="Username" />
          </div>
          <div>
            {" "}
            <input type="password" placeholder="Password" />
          </div>{" "}
          <div>
            {" "}
            <button className="btn-SUB">SUBMIT</button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
