import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
// import './LoginSignUp.css'

import {  toast } from "react-toastify";
const LoginPage = (props) => {
  const [action, setAction] = useState("Login");
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    studentName: "",
  });
  const [credentials, setcredentials] = useState({
    "email": "",
    "password": "",
  });
  const navigate = useNavigate();

  const handleSumbit = async (e) => {
    e.preventDefault();
    if (action == "Sign Up") {
    //   console.log(newUser);
      try {
        const resp = await axios.post("http://localhost:8080/api/students",newUser)
        if(resp.status == 200) toast("USer Created Successfully")
    //   console.log(resp);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        // console.log(credentials);
        const resp = await axios.post(
            "http://localhost:8080/api/students/login",
            credentials
          );
          if (resp.status == 200) toast("Login Successfull!");
          else toast("Bad Request!");
          console.log(resp.data[1]);
          localStorage.setItem('loggedIn',true)
          localStorage.setItem('userId', resp.data[1]);
          localStorage.setItem('role',resp.data[0])
          if(localStorage.getItem('role') == 2) navigate("/adminDashboard")
            else navigate(`/students`)
          props.setLogged(true)
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form onSubmit={handleSumbit}>
      <div className="container">
        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <input
                type="text"
                value={newUser.studentName}
                onChange={(e) => {
                  setNewUser({ ...newUser, studentName: e.target.value });
                }}
                placeholder="Username"
              />
            </div>
          )}

          <div className="input">
            <input
              type="email"
              value={credentials.email}
              onChange={(e) => (
                setcredentials({ ...credentials, email: e.target.value }),
                setNewUser({ ...newUser, email: e.target.value })
              )}
              placeholder="Email"
            />
          </div>
          <div className="input">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6195/6195699.png"
              alt=""
            />

            <input
              type="password"
              onChange={(e) => (
                setcredentials({ ...credentials, password: e.target.value }),
                  setNewUser({ ...newUser, password: e.target.value })
  )}
              value={credentials.password}
              placeholder="*******"
            />
          </div>
        </div>
        {action & (action === "Sign Up") ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Forget Password? <span>Click Here</span>
          </div>
        )}

        <button
          className={
            action === "Sign Up" ? "submit btn-danger " : "submit btn-warning"
          }
        >
          submit
        </button>
      </div>
    </form>
  );
};

export default LoginPage;
