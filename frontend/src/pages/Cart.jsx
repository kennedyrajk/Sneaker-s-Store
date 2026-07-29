import { useContext } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";

import "../styles/Cart.css";

export default function Cart() {
  const {cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0);
  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0);
  const deliveryFee = subtotal > 0 ? 0 : 0;
  const grandTotal = subtotal + deliveryFee;
  return (
    <>
      <Navbar />

      <main className="cart-page">
        <h1>Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Add some sneakers to your cart and they will appear here.</p>

            <Link to="/products">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div
                  className="cart-item"
                  key={`${item._id}-${item.size}`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="cart-item-info">
                    <h2>{item.name}</h2>
                     <p>{item.brand}</p>

                    <p>Size: {item.size}</p>

                    <h3> ₹{item.price}</h3>
                    <p className="item-total">
                      Item Total: ₹{item.price * item.quantity}</p>

                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          decreaseQuantity(
                            item._id,
                            item.size
                          )
                        }
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          increaseQuantity(
                            item._id,
                            item.size
                          )
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() =>
                        removeFromCart(
                          item._id,
                          item.size
                        )
                      }
                    >
                      Remove
                    </button>
                    
                  </div>
                  
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Cart Summary</h2>

              <div className="summary-row">
                <span>Total Items</span>

                <span>{totalItems}</span>
              </div>

              <div className="summary-row">
                <span>Subtotal</span>

                <span>
                  ₹{subtotal}
                </span>
               
              </div>

              <div className="summary-row">
                <span>Delivery</span>

                <span>
                  {deliveryFee === 0
                    ? "FREE"
                    : `₹${deliveryFee}`}
                </span>
              </div>

              <hr />

              <div className="summary-total">
                <span>Total</span>

                <strong>
                  ₹{grandTotal}
                </strong>
                
              </div>

              <button>Checkout</button>

               <button
                className="clear-cart-btn"
                onClick={clearCart}
                >Clear Cart</button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}