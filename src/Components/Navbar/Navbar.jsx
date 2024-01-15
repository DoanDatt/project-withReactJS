import React, { useState } from "react";
import "./Navbar.css";
import { useContext } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
const Navbar = () => {
  const [menu, Setmenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
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
        <button>
          <Link to="/login">Login</Link>
        </button>
        <Link to="/cart">
          <img src={cart_icon} alt="cart_icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
