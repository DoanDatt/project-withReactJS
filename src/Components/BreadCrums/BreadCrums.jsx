import React from "react";
import "./BreadCrums.css";
import breactcrum_icon from "../Assets/breadcrum_arrow.png";
const BreadCrums = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <img src={breactcrum_icon} alt="" />
      SHOP <img src={breactcrum_icon} alt="" />
      {product.category}
      <img src={breactcrum_icon} alt="" />
      {product.name}
    </div>
  );
};

export default BreadCrums;
