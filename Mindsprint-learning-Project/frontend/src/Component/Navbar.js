import React from "react";
import { Outlet, Link } from "react-router-dom";
import { toast } from "react-toastify";
import './Home.css'

const Navbar = () => {
  // console.log(loggedIn);

const LogoutUser = async() =>{
  localStorage.clear();
  toast("User Log out Successfully")
}
  // console.log(localStorage.getItem('userId'));
  // console.log(localStorage.getItem('userId'));
  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid "  id="nav-home">
          <Link className="nav-link active" to='/'>
          <img
              src="https://cdn4.iconfinder.com/data/icons/panda-4/512/sticker_emoticon_emoji_smiley_koala_read_learn-512.png"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            Mindsprint Learning
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/courses">
                  Courses
                </Link>
              </li>
              {localStorage.getItem('role') == 2 && <li className="nav-item">
                <Link className="nav-link active" to="/adminDashboard">
                  Admin Dashboard
                </Link>
              </li>}
              <li className="nav-item">
                { localStorage.getItem('role') == 1 && <Link className="nav-link active" to="/rCourse">
                  Registered Courses
                </Link>}
              </li>
              <li className="nav-item">
              {(localStorage.getItem('userId') != null) ?<Link className="btn btn-waring nav-link " to="/" onClick={LogoutUser}>
              Log Out
            </Link>:
            <Link className="btn btn-waring nav-link " to="login">
            Login
          </Link>
          }
                </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet/>
    </>
  );
};


export default Navbar;