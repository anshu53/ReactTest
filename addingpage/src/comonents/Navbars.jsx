import React from "react";
import { NavLink } from "react-router-dom";
const Navbars = () => {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="navbars">
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/todo">Todo</NavLink>
      <NavLink to="/userlist">UsersList</NavLink>
      <NavLink to="/logout" onClick={logout}>
        Logout
      </NavLink>
    </div>
  );
};

export default Navbars;
