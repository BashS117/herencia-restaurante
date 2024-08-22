import React, { useState } from "react"
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
const MenuSlider = () => {

  
  const {active,setActive}= useContext(AppContext)

  const categories = ["Menu rapido", "Platos fuertes", "Bebidas", ];

  return (
    <div className="flex overflow-x-auto space-x-4 p-2 scrollbar-hide">
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
