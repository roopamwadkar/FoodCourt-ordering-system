import React from "react";

export default function PaymentPage({ amount, onBack, onPaymentSuccess }) {
  return (
    <div className="mt-4">
      <button className="btn btn-link" onClick={onBack}>← Back</button>
      <h4>Payment</h4>
      <h3>₹{amount.toFixed(2)}</h3>

      <button className="btn btn-outline-primary w-100" onClick={onPaymentSuccess}>
        Pay Now
      </button>
    </div>
  );
}
