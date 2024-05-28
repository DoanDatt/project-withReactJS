import React, { useRef, useState } from "react";
import "./Navbar.css";
import { useContext } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/dropdown_icon.png";
const Navbar = () => {
  const [menu, Setmenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <img
        className="nav-dropdown"
        src={nav_dropdown}
        onClick={dropdown_toggle}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => Setmenu("shop")}>
          {" "}
          <Link to="/">SHOP</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => Setmenu("mens")}>
          {" "}
          <Link to="/mens">MAN</Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li onClick={() => Setmenu("womens")}>
          {" "}
          <Link to="/womens">WOMAN</Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li onClick={() => Setmenu("kids")}>
          {" "}
          <Link to="/kids"> KIDS</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            LogOut
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        <Link to="/cart">
          <img src={cart_icon} alt="cart_icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
