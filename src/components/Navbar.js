import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../App.css";
import { IconContext } from "react-icons";

function Menu() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

//Logo
function Logo() {
  return(
    <div className="logo">
      <a href="/">BookStore</a>
    </div>
  )
}

//Search
function Search() {
  return(
    <div className="search">
      <input type="text" className="search-bar" placeholder="  Search..."/>
    </div>
  )
}

//Cart
function Cart() {
  return(
    <IconContext.Provider value={{ color: "undefined", size: '20px' }}>
      <div className="cart">
        <a href="/"><FaIcons.FaCartPlus className="cart-icon"/></a>
      </div>
    </IconContext.Provider>
  )
}

//LogIn
function LogIn() {
  return(
    <div className="login">
      <button className="login-btn">LogIn</button>
    </div>
  )
}


function Header() {
  return(
    <div className="header">
      <Menu />
      <Logo />
      <Search />
      <Cart />
      <LogIn />
    </div>
  )
}

export default Header;