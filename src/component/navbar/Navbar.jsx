import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assert/GPT-3.svg";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-link">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="Logo" srcset="" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Link to="/">Home</Link>
          <Link to="/wgpt">What is GPT?</Link>
          <Link to="/possibility">Open Ai</Link>
          <Link to="/feature">Case Studies</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </div>
      <div className="gpt3__navbr-sing">
        <Link to="/loging">
          <p>Loging</p>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
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
              <Link to="/">Home</Link>
              <Link to="/wgpt">What is GPT?</Link>
              <Link to="/possibility">Open Ai</Link>
              <Link to="/feature">Case Studies</Link>
              <Link to="/blog">Blog</Link>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <Link to="/loging">
                <p>Loging</p>
              </Link>
              <Link to="/register">
                <button>Register</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
