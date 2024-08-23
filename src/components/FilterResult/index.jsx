import React from 'react'
import { useContext } from "react";
import { AppContext } from '../../Context/AppContext';

const FilterResult = ({products}) => {

    const {dispatch,mostrarAlert}=useContext(AppContext)

    //funcion para agregar  un producto al carrito 
    const addToCart = (product)=>{
      const itemToAdd = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity:1,
        //otras propiedades
      }
      //Despacho la accion  add_to_ cart con el item como payload
      dispatch({
        type:'ADD_TO_CART', 
        payload: itemToAdd
      })
      mostrarAlert();

    }

    
    return (
      <div className="flex  overflow-x-auto gap-4 scrollbar-hide p-2">
        
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md min-w-[180px] h-auto flex-shrink-0">
            <div className="relative">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/0997c2185580241.65694b1bc9a96.jpg"
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-between mt-4">
              <div>
                <h3 className="text-md text-start font-semibold">{product.name}</h3>
              </div>
  
              <div className="flex items-center justify-between mt-2">
                <p className="text-lg font-semibold">${product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="w-[30px] h-[30px] bg-[#cea648] text-white rounded-md hover:bg-red-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
}

export default FilterResult