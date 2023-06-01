import React, { useState, useEffect, useContext } from "react";
import { getAll } from "../mocks/data";
import { useHistory } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

function FriendsList() {
  const history = useHistory();
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      console.log(storedToken);
    } else {
      history.push("/");
    }
  }, [history]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const allData = getAll(); // Verileri almak için uygun fonksiyonu çağırın
    setData(allData);
  }, []);

  const { logout } = useContext(LoginContext);

  const handleLogout = () => {
    logout();
    history.push("/");
  };

  const handleAddFriend = () => {
    history.push("/addfriend");
  };

  return (
    <div>
      <div className="head">
        <h1 style={{ float: "left" }}> FRIENDS DATABASE </h1>
        <div style={{ float: "right" }}>
          <button className="btn">Login</button>
          <button className="btn">FRIENDLIST.</button>
          <button onClick={handleAddFriend} className="btn">
            ADD FRIENDS.
          </button>
          <button className="btn" onClick={handleLogout}>
            LOGOUT
          </button>
        </div>
      </div>
      <hr id="cizgi" />
      <div className="container">
        <div className="ortaContainer">
          <h1>FRIENDS LIST</h1>
          {data.map((item) => (
            <div key={item.id} style={{ textAlign: "center" }}>
              <h3 style={{ fontWeight: "bold", color: "black" }}>
                -{item.name}-{item.email}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FriendsList;
