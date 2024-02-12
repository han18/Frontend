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
      
        <h1>HowEdible</h1>
        <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
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
