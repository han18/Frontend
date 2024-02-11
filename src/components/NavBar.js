import React from "react";
// import "../styles/Navbar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={{ backgroundColor: "#333", padding: "10px", color: "white" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>My Navbar</h1>
        <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <Link to="/form">
              <a href="#">Sign up</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
