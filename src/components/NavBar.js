import React from "react";
import NavbarCss from "../styles/Navbar.module.css";

const NavBar = () => {
  return (
    <div>
      <nav id="topnav">
        <a id="logo" class="nav-link" href="#">
          MY NAME
        </a>
        <a class="nav-link" href="#">
          Link 1
        </a>
        <a class="nav-link" href="#">
          Link 2
        </a>
        <a class="nav-link" href="#">
          Link 3
        </a>
        <a class="nav-link" href="#">
          Link 4
        </a>
        <a class="nav-link" href="#">
          Link 5
        </a>

        <a id="about" class="nav-link" href="#">
          About Me
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
