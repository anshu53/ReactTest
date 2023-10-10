import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";
import Protected from "./Protected";
import App from "../App";
import Navbars from "./Navbars";

const Login = (e) => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const getemail = localStorage.getItem("emailData");
  const getpassword = localStorage.getItem("passwordData");
  const login = (event) => {
    event.preventDefault();
    if (
      email.current.value == "abc@gmail.com" &&
      password.current.value == "12345"
    ) {
      localStorage.setItem("emailData", "abc@gmail.com");
      localStorage.setItem("passwordData", "12345");
    }
    navigate("/");
  };
  useEffect(() => {
    //   let login = localStorage.getItem("login");
    if (getemail && getpassword) {
      navigate("/");
    }
  });
  return (
    <>
      <div className="login_form">
        <h2>Log in here</h2>
        <form action="" onSubmit={login}>
          <div>
            <input type="text" ref={email} placeholder="Type Email..." />
          </div>
          <div>
            <input
              type="password"
              ref={password}
              placeholder="Type Password..  "
            />
          </div>
          <div>
            <button>LogIn</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
