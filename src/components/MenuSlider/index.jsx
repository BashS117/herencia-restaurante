import React, { useState } from "react"
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
const MenuSlider = () => {

  
  const {active,setActive,setFilteredProducts,setFilter,setInputValue}= useContext(AppContext)

  const categories = ["Menu rapido", "Platos fuertes", "Bebidas", ];

  const handleCategoryChange = (category) => {
    setActive(category);
    setFilteredProducts(null);
    setFilter(null); // Esto borra el estado de búsqueda
    setInputValue('')
  };

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
          onClick={() => handleCategoryChange(category)
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default MenuSlider;
