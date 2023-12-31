import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
const Navbar = () => {
  //const navigate = useNavigate()
  // const handleLogOut = ()=>{

  //    localStorage.removeItem("login")
  //   navigate("/login")
  // }
  const logout = () => {
    return localStorage.removeItem("obj");
  };
  // let data = localStorage.getItem("obj");
  // if (data) {
  //   let d = JSON.parse(data);
  //   // console.log(d.email);
  // }

  if (!"login") {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to={"/"}>
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <li className="nav-item ">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/table">
                Table
              </Link>
            </li>
            <div>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  SignUp
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </div>
            {/* <li className="nav-item">
          <button className="btn btn-outline-success" to={"/"} onClick={() => handleLogOut()}>{d.email}</button>
        </li> */}
          </ul>
        </div>
      </nav>
    );
  }
  if ("login") {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <li className="nav-item ">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/table">
                Table
              </Link>
            </li>
            {/* <div>
      <li className="nav-item">
        <Link className="nav-link" to={"/signup"}>SignUp</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/login"}>Login</Link>
      </li>
      </div> */}
            <li className="nav-item">
              <Link to="/" className="nav-item nav-link" onClick={logout}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  // return (

  // );
};
export default Navbar;
