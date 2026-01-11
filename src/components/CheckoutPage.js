import React from "react";

export default function CheckoutPage({ cart, onBack, onPlaceOrder }) {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const gst = subtotal * 0.05;
  const total = subtotal + gst;

  return (
    <div className="mt-4">
      <button className="btn btn-link" onClick={onBack}>← Back</button>
      <h4>Checkout</h4>
      <p>Subtotal: ₹{subtotal}</p>
      <p>GST (5%): ₹{gst.toFixed(2)}</p>
      <h5>Total: ₹{total.toFixed(2)}</h5>

      <button className="btn btn-success w-100" onClick={onPlaceOrder}>
        Place Order
      </button>
    </div>
  );
}
