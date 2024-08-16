import React, { useState } from "react";

function DishItem({ dish,name,details }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md min-w-[180px] h-[auto]">
      <div className="relative">
        <img
        //   src={dish.image}
        //   alt={dish.name}
          className="w-full h-40 object-cover rounded-lg"
        />
        <button
          onClick={() => setLiked(!liked)}
          className={`absolute top-2 right-2 ${
            liked ? "text-red-600" : "text-gray-400"
          }`}
        >
          ♥
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">category</p>
        <p className="text-lg font-semibold mt-2">Rs price</p>
      </div>
      <button className="mt-4 w-full bg-[#cea648] text-white py-2 rounded-lg hover:bg-red-700">
        +
      </button>
    </div>
  );
}

export default DishItem;
