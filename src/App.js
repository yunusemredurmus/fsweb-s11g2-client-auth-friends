import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login } from "./comp/Login";
import FriendsList from "./comp/FriendsList ";
import "./App.css";
import AddFriend from "./comp/AddFriend";
function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/friendlist" component={FriendsList} />
      <Route exact path="/addfriend" component={AddFriend} />
    </Router>
  );
}

export default App;
