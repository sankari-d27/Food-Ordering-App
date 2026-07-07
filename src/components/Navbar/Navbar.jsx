import React, { useContext, useState } from "react";
import { IoBasketOutline } from "react-icons/io5";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";


const Navbar = ({setShowLogin}) => {

  const [menu,setMenu] = useState("home");

  const {getTotalCartCount} = useContext(StoreContext);

  return (
    <div className="navbar">

      <Link to="/">
        <img className="logo" src={assets.logo} alt="logo"/>
      </Link>

      <ul className="navbar-menu">

        <Link
          to="/"
          onClick={()=>setMenu("home")}
          className={menu==="home"?"active":""}
        >
          Home
        </Link>

        <a
          href="#explore-menu"
          onClick={()=>setMenu("menu")}
          className={menu==="menu"?"active":""}
        >
          Menu
        </a>

        <a
          href="#app-download"
          onClick={()=>setMenu("mobile")}
          className={menu==="mobile"?"active":""}
        >
          Mobile App
        </a>

        <a
          href="#footer"
          onClick={()=>setMenu("contact")}
          className={menu==="contact"?"active":""}
        >
          Contact Us
        </a>

      </ul>

      <div className="navbar-right">

        <div className="navbar-search-icon">
          <Link to="/cart"><IoBasketOutline/></Link>
          {
            getTotalCartCount() > 0 &&
            <div className="dot">
              {getTotalCartCount()}
            </div>
          }
        </div>

        <button onClick={()=>setShowLogin(true)}>Sign In</button>

      </div>
    </div>
  );
};

export default Navbar;
