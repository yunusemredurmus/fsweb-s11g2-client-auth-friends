import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";
import "./login.css";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export const Login = () => {
  const [form, setForm] = useState({
    username: "workintech",
    password: "wecandoit",
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.username === "workintech" && form.password === "wecandoit") {
      setIsLoading(true);
      axios
        .post("http://localhost:9000/api/login", form)
        .then(function (response) {
          const token = response.data.token;
          localStorage.setItem("token", JSON.stringify(token));
          console.log(token);
          setLoggedIn(true);
          setIsLoading(false);
          history.push("/friendlist");
        })
        .catch(function (error) {
          console.log(error);
          setIsLoading(false);
        });
    }
  };

  return (
    <div>
      <div className="head">
        <h1 style={{ float: "left" }}> FRIENDS DATABASE </h1>
        <div style={{ float: "right" }}>
          <button className="btn">Login</button>
          {loggedIn && <button className="btn">FRIENDLIST.</button>}
          {loggedIn && <button className="btn">ADD FRIENDS.</button>}
          {loggedIn && <button className="btn">LOGOUT</button>}
        </div>
      </div>
      <hr id="cizgi" />
      <div className="container">
        <div className="ortaContainer">
          <h1>LOGIN</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="username"
                placeholder="workintech"
                value={form.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="wecandoit"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <button type="submit" className="btn-SUB">
                SUBMIT
              </button>
              {isLoading ? (
                <ClipLoader
                  css={override}
                  size={100}
                  color={"#123abc"}
                  loading={isLoading}
                />
              ) : (
                loggedIn && <p1>Giriş Başarılı!</p1>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
