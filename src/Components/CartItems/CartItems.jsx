import React, { useContext, useState } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
const CartItems = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Xử lý sự kiện khi nhấn nút "PROCEED TO CHECKOUT"
  const handleCheckout = () => {
    // Thực hiện các bước xử lý thanh toán ở đây

    // Sau khi thanh toán thành công, hiển thị thông báo
    setShowSuccessMessage(true);

    // Tự động ẩn thông báo sau 5 giây
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  const { getTotalCartAmount, all_product, cartItems, removeToCart } =
    useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main ">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartiems-remove-icon"
                  src={remove_icon}
                  alt=""
                  onClick={() => {
                    removeToCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shiping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          {/* <button>PROCEED TO CHECKOUT</button> */}
          <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
          {showSuccessMessage && (
            <div className="success-message">Thanh Toán Thành Công!!!</div>
          )}
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="tetx" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
