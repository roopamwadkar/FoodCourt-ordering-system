import React from "react";

export default function CartPage({ cart, total, onBack, increaseQty, decreaseQty, onCheckout }) {
  const grouped = cart.reduce((g, i) => {
    g[i.shop] = g[i.shop] || [];
    g[i.shop].push(i);
    return g;
  }, {});

  return (
    <div className="mt-4">
      <button className="btn btn-link mb-2" onClick={onBack}>← Back</button>
      <h4>Your Cart</h4>

      {Object.keys(grouped).map(shop => (
        <div key={shop}>
          <h5 className="text-primary">{shop}</h5>
          {grouped[shop].map((item, idx) => (
            <div key={idx} className="card p-2 mb-2">
              <strong>{item.name}</strong>
              <div>
                <button onClick={() => decreaseQty(cart.indexOf(item))}>−</button>
                <span className="mx-2">{item.qty}</span>
                <button onClick={() => increaseQty(cart.indexOf(item))}>+</button>
              </div>
            </div>
          ))}
        </div>
      ))}

      <h5>Total: ₹{total}</h5>
      <button className="btn btn-success w-100" onClick={onCheckout}>
        Proceed to Checkout
      </button>
    </div>
  );
}
