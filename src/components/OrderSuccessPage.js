import React from "react";

export default function OrderSuccessPage({ orderId, amount, onBackToHome }) {
  return (
    <div className="mt-5 text-center">
      <h2>✅ Order Successful</h2>
      <p>Order ID: {orderId}</p>
      <p>Amount Paid: ₹{amount.toFixed(2)}</p>
      <button className="btn btn-primary" onClick={onBackToHome}>
        Back to Food Court
      </button>
    </div>
  );
}
