import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./comp/Login";

function App() {
  return (
    <Router>
      <Route exact path="/login" component={Login} />
    </Router>
  );
}

export default App;
