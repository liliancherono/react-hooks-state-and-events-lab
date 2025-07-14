import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleChange = e => {
    setSelectedCategory(e.target.value);
  };

  const visibleItems =
    selectedCategory === "All"
      ? items
      : items.filter(item => item.category === selectedCategory);

  return (
    <div>
      <select value={selectedCategory} onChange={handleChange}>
        <option value="All">All</option>
        {/* Dynamically generate unique categories */}
        {[...new Set(items.map(item => item.category))].map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <ul className="Items">
        {visibleItems.map(item => (
          <Item
            key={item.id}
            name={item.name}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
