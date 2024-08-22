import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from '../../Context/AppContext';

function DishItem({ dish,name,details }) {
  const [liked, setLiked] = useState(false);
  const {dispatch}= useContext(AppContext)

   //funcion para agregar  un producto al carrito 
   const addToCart = (name)=>{
    const itemToAdd = {
      // id: id,
      name: name,
      // image:image,
      price: 20000,
      quantity:1,
      //otras propiedades
    }
  //Despacho la accion  add_to_ cart con el item como payload
  dispatch({
    type:'ADD_TO_CART', 
    payload: itemToAdd
  })
// Muestro una alerta al usuario
// mostrarAlert()   
}

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
      <button 
         onClick={() => addToCart(name)}
        className=" w-[30px] h-[30px] bg-[#cea648] text-white  rounded-md hover:bg-red-700 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
      </div>
     </div>
      
    </div>
  );
}

export default DishItem;
