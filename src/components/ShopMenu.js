import React from "react";
import { menuItems } from "../data/data";

export default function ShopMenu({ shop, onBack, addToCart }) {
  return (
    <div className="mt-4">
      <button className="btn btn-link mb-2" onClick={onBack}>← Back</button>
      <h4>{shop.name} Menu</h4>

      {menuItems[shop.id].map(item => (
        <div key={item.id} className="card p-3 mb-2">
          <div className="d-flex justify-content-between">
            <span>{item.name}</span>
            <strong>₹{item.price}</strong>
          </div>
          <button className="btn btn-success btn-sm mt-2"
            onClick={() => addToCart(item, shop)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
