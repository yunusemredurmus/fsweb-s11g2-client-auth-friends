import React, { useState, useEffect, useContext } from "react";
import { getAll } from "../mocks/data";
import { LoginContext } from "../context/LoginContext";
import { useHistory } from "react-router-dom";
import axios from "axios";

const AddFriend = () => {
  const [newData, setNewData] = useState([]); // Yeni verileri almak için uygun fonksiyonu çağırın
  const [addForm, setAddForm] = useState({
    username: "",
    email: "",
  }); // Form verilerini tutmak için bir state

  const history = useHistory();
  const { logout } = useContext(LoginContext);

  useEffect(() => {
    const allData = getAll(); // Verileri almak için uygun fonksiyonu çağırın
    setNewData(allData);
  }, []);

  const handleAddFriend = (e) => {
    e.preventDefault();
    setAddForm({ ...addForm, [e.target.name]: e.target.value });
  };

  const handleLogout = () => {
    logout();
    history.push("/");
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      console.log(storedToken);
    } else {
      history.push("/");
    }
  }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/friends", addForm)
      .then((res) => {
        console.log(res);
        history.push("/friendlist");
        setNewData([...newData, addForm]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFriendList = () => {
    history.push("/friendlist");
  };

  console.log(addForm);
  return (
    <div>
      <div className="head">
        <h1 style={{ float: "left" }}> FRIENDS DATABASE </h1>
        <div style={{ float: "right" }}>
          <button onClick={handleFriendList} className="btn">
            FRIENDLIST.
          </button>
          <button className="btn">ADD FRIENDS.</button>
          <button className="btn" onClick={handleLogout}>
            LOGOUT
          </button>
        </div>
      </div>
      <hr id="cizgi" />
      <div className="container"></div>
      <div className="ortaContainer">
        <h1>ADD FRIENDS</h1>
        <form onClic={handleSubmit}>
          <input
            value={addForm.username}
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleAddFriend}
          ></input>
          <input
            value={addForm.email}
            placeholder="Email"
            type="text"
            name="email"
            onChange={handleAddFriend}
          ></input>
          <button type="submit" className="btn-SUB">
            SUBMIT
          </button>{" "}
        </form>
      </div>
    </div>
  );
};

export default AddFriend;
