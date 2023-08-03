import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assert/GPT-3.svg";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-link">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="Logo" srcset="" />
        </div>
        <div className="gpt3__navbar-links_container">
          <a href="#hone">Home</a>
          <a href="#wgpt3">What is GPT?</a>
          <a href="#possibility">Open Ai</a>
          <a href="#features">Case Studies</a>
          <a href="#blog">Blog</a>{" "}
        </div>
      </div>
      <div className="gpt3__navbr-sing">
        <p>Sign in</p>
        <button>sign out</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <a href="#hone">Home</a>
              <a href="#wgt3">What is GPT?</a>

              <a href="#feature">Case Studies</a>
              <a href="#blog">Blog</a>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button>sign out</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
