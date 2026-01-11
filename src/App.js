import React, { useState } from "react";
import "./App.css";

import FoodCourtHome from "./components/FoodCourtHome";
import ShopMenu from "./components/ShopMenu";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";
import PaymentPage from "./components/PaymentPage";
import OrderSuccessPage from "./components/OrderSuccessPage";

function App() {
  const [selectedShop, setSelectedShop] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const addToCart = (item, shop) => {
    setCart(prev =>
      prev.some(i => i.id === item.id && i.shop === shop.name)
        ? prev.map(i =>
            i.id === item.id && i.shop === shop.name
              ? { ...i, qty: i.qty + 1 }
              : i
          )
        : [...prev, { ...item, shop: shop.name, qty: 1 }]
    );
  };

  const increaseQty = index =>
    setCart(cart.map((i, idx) =>
      idx === index ? { ...i, qty: i.qty + 1 } : i
    ));

  const decreaseQty = index =>
    setCart(cart
      .map((i, idx) =>
        idx === index ? { ...i, qty: i.qty - 1 } : i
      )
      .filter(i => i.qty > 0)
    );

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const handlePaymentSuccess = () => {
    setOrderDetails({
      orderId: "FC" + Date.now(),
      amount: total * 1.05
    });
    setCart([]);
    setShowPayment(false);
    setShowCheckout(false);
    setShowCart(false);
    setShowSuccess(true);
  };

 return (
  <div className="home-bg">
    <div className="home-overlay">

      {/* Header (fixed height) */}
      <div className="home-header">
        <h2>Food Court Ordering System</h2>

        <button
          className="btn btn-outline-primary"
          onClick={() => {
            setShowCart(true);
            setShowCheckout(false);
            setShowPayment(false);
            setShowSuccess(false);
          }}
        >
          🛒 Cart Items: {cart.length}
        </button>
      </div>

      {/* Scrollable area ONLY */}
      <div className="home-scroll">
        {!selectedShop && !showCart && !showCheckout && !showPayment && !showSuccess && (
          <FoodCourtHome onSelectShop={setSelectedShop} />
        )}

        {showCart && (
          <CartPage
            cart={cart}
            total={total}
            onBack={() => setShowCart(false)}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
            onCheckout={() => {
              setShowCart(false);
              setShowCheckout(true);
            }}
          />
        )}

        {showCheckout && (
          <CheckoutPage
            cart={cart}
            onBack={() => setShowCheckout(false)}
            onPlaceOrder={() => {
              setShowCheckout(false);
              setShowPayment(true);
            }}
          />
        )}

        {showPayment && (
          <PaymentPage
            amount={total * 1.05}
            onBack={() => setShowPayment(false)}
            onPaymentSuccess={handlePaymentSuccess}
          />
        )}

        {showSuccess && (
          <OrderSuccessPage
            orderId={orderDetails.orderId}
            amount={orderDetails.amount}
            onBackToHome={() => {
              setShowSuccess(false);
              setSelectedShop(null);
            }}
          />
        )}

        {selectedShop && !showCart && !showCheckout && !showPayment && (
          <ShopMenu
            shop={selectedShop}
            onBack={() => setSelectedShop(null)}
            addToCart={addToCart}
          />
        )}
      </div>

    </div>
  </div>
);
}

export default App;
