import React, { useContext, useState } from 'react';
import './checkout.css';
import { ShopContext } from '../context/shop_context';

/**
 * Checkout component to handle the checkout process.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export const Checkout = () => {
  // Destructuring cartItems, products, and getTotalCartAmount from ShopContext
  const { cartItems, products, getTotalCartAmount } = useContext(ShopContext);
  // State for shipping cost
  const [shippingCost, setShippingCost] = useState(60);
  // State for selected payment method
  const [paymentMethod, setPaymentMethod] = useState('SSLCommerz');

  // Calculate subtotal
  const subtotal = getTotalCartAmount();
  // Calculate total including shipping
  const total = subtotal + shippingCost;

  return (
    <div className="App">
      <main>
        <h1>CHECKOUT</h1>
        <div className="checkout-container">
          <div className="billing-shipping">
            <h2>BILLING & SHIPPING</h2>
            <form>
              <div>
                <label>First name *</label>
                <input type="text" required />
              </div>
              <div>
                <label>Last name *</label>
                <input type="text" required />
              </div>
              <div>
                <label>Company name (optional)</label>
                <input type="text" />
              </div>
              <div>
                <label>Country / Region *</label>
                <input type="text" required defaultValue="Bangladesh" />
              </div>
              <div>
                <label>Street address *</label>
                <input type="text" placeholder="House number and street name" required />
                <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" />
              </div>
              <div>
                <label>Town / City *</label>
                <input type="text" required />
              </div>
            </form>
          </div>
          <div className="order-summary">
            <h2>YOUR ORDER</h2>
            <div className="order-details">
              {/* Displaying each product in the cart */}
              {products.map((product) => (
                cartItems[product.id] > 0 && (
                  <div key={product.id} className="order-item">
                    <span>{product.productName} x {cartItems[product.id]}</span>
                    <span>{product.price * cartItems[product.id]}৳</span>
                  </div>
                )
              ))}
              {/* Displaying subtotal */}
              <div className="order-item">
                <span>Subtotal</span>
                <span>{subtotal}৳</span>
              </div>
              {/* Displaying shipping cost */}
              <div className="order-item">
                <span>Shipping</span>
                <span>{shippingCost}৳</span>
              </div>
              {/* Displaying total */}
              <div className="order-item total">
                <span>Total</span>
                <span>{total}৳</span>
              </div>
              <div className="payment-method">
                <h3>Payment Method</h3>
                {/* Radio buttons for selecting payment method */}
                <label>
                  <input
                    type="radio"
                    value="SSLCommerz"
                    checked={paymentMethod === 'SSLCommerz'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Pay Online - SSLCommerz
                </label>
                <label>
                  <input
                    type="radio"
                    value="Cash on delivery"
                    checked={paymentMethod === 'Cash on delivery'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Cash on delivery
                </label>
                <label>
                  <input
                    type="radio"
                    value="bKash Payment Gateway"
                    checked={paymentMethod === 'bKash Payment Gateway'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  bKash Payment Gateway
                </label>
              </div>
            </div>
            {/* Button to place order */}
            <button className="place-order-btn">PLACE ORDER</button>
          </div>
        </div>
      </main>
    </div>
  );
};


