import React from "react";
// import "../styles/Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ user, setUser }) => {
  const navigate = useNavigate();

  // log out handler function and using the navigate function
  const logOut = () => {
    setUser({});
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <nav
      style={{
        backgroundColor: "#045C25 ",
        padding: "6px",
        color: "white",
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>
          {/* both link howedible and Home go back to the homepage */}
          <Link style={{ color: "white", textDecoration: "none" }} to="/">
            HowEdible
          </Link>
        </h1>
        <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
          <li>
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>
          {user?.email ? (
            <li>
              <span style={{ color: "black" }} onClick={logOut}>
                <p>Log out</p>
              </span>
            </li>
          ) : (
            <>
              <li>
                <Link to="/form">
                  <p>Sign up</p>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <p>Login</p>
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
