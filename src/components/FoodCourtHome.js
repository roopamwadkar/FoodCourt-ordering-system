

import React, { useState } from "react";

function FoodCourtHome({ onSelectShop }) {
  const shops = [
    { id: 1, name: "Burger King", category: "Fast Food" },
    { id: 2, name: "Anna South Indian", category: "Veg" },
    { id: 3, name: "Ankita Chinese", category: "Chinese" },
    { id: 4, name: "Garva Biryani", category: "Veg / Non-Veg" },
    { id: 5, name: "Domino's", category: "Veg/Non-veg" },
    { id: 6, name: "Pizza Hut", category: "Veg/Non-veg" },
    { id: 7, name: "sub-way", category: "Chinese" },
    { id: 8, name: "Mac-d", category: "Veg / Non-Veg" }
  ];

  const [search, setSearch] = useState("");

  const filteredShops = shops.filter(shop =>
    shop.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-bg">
      <div className="home-overlay">

        {/* Search Bar */}
        <input
          type="text"
          className="form-control form-control-lg mb-4"
          placeholder="Search food outlets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Shops */}
        <div className="row">
          {filteredShops.map(shop => (
            <div className="col-md-3 mb-4" key={shop.id}>
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  <h5>{shop.name}</h5>
                  <p className="text-muted">{shop.category}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => onSelectShop(shop)}
                  >
                    View Menu
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default FoodCourtHome;

