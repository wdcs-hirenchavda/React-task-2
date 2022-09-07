import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import LogOut from "./components/LogOut";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/users" element={<Users />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/editUser" element={<EditUser />} />
          <Route path="/logOut" element={<LogOut />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
