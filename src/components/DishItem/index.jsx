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
        {/* <button
          onClick={() => setLiked(!liked)}
          className={`absolute top-2 right-2 ${
            liked ? "text-red-600" : "text-gray-400"
          }`}
        >
          ♥
        </button> */}
      </div>
     <div className="flex flex-col justify-between">
     <div className="mt-4">
        <h3 className="text-md text-start font-semibold">{name}</h3>
        {/* <p className="text-sm text-gray-500">category</p> */}
      </div>

      <div className="flex items-center justify-between"> 
      <p className="text-lg font-semibold mt-2">20.000$</p>
      <button className=" w-[30px] h-[30px] bg-[#cea648] text-white  rounded-md hover:bg-red-700 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
      </div>
     </div>
      
    </div>
  );
}

export default DishItem;
