import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaUser, FaSearch } from "react-icons/fa"; 
import AddUser from "./AddUser";
import ListUsers from "./ListUsers";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav className="nav">
  <div className="nav-left">
    <h1 className="logo">User Management System</h1>
  </div>
  <div className="nav-right">
    <Link to="/" className="nav-link">
      <FaUser style={{ marginRight: "6px" }} />
      Add User
    </Link>
    <Link to="/list" className="nav-link">
      <FaSearch style={{ marginRight: "6px" }} />
      List Users
    </Link>
  </div>
</nav>
        <div className="container">
          <h1 className="title">ADD SEARCH USERS</h1>
          <Routes>
            <Route path="/" element={<AddUser />} />
            <Route path="/list" element={<ListUsers />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;