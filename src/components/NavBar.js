import React from "react";
// import "../styles/Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ user, setUser }) => {
  const navigate = useNavigate();

  // log out handler
  const logOut = () => {
    setUser({});
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <nav style={{ backgroundColor: "#333", padding: "10px", color: "white" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>
          <Link style={{ color: "white", textDecoration: "none" }} to="/">
            HowEdible
          </Link>
        </h1>
        <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          {user?.email ? (
            <li>
              <span style={{ color: "black" }} onClick={logOut}>
                <a>Log out</a>
              </span>
            </li>
          ) : (
            <>
              <li>
                <Link to="/form">
                  <a href="#">Sign up</a>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <a href="#">Login</a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
