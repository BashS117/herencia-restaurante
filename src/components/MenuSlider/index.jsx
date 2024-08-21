import React, { useState } from "react";

const MenuSlider = () => {
  const [active, setActive] = useState("Menu rapido");

  const categories = ["Menu rapido", "Platos fuertes", "Bebidas", ];

  return (
    <div className="flex overflow-x-auto space-x-4 p-4 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-full whitespace-nowrap ${
            active === category
              ? " text-white bg-[#cea648]"
              : "bg-white"
          }`}
          onClick={() => setActive(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default MenuSlider;
