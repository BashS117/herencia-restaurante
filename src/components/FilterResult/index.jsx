import React from 'react'
import { useContext } from "react";
import { AppContext } from '../../Context/AppContext';

const FilterResult = ({products}) => {

    const {dispatch}=useContext(AppContext)

    //funcion para agregar  un producto al carrito 
    const addToCart = (product)=>{
      const itemToAdd = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity:1,
        //otras propiedades
      }
      //Despacho la accion  add_to_ cart con el item como payload
      dispatch({
        type:'ADD_TO_CART', 
        payload: itemToAdd
      })
    }

    
  return (
    <div className='mt-2'>
        <ul className="w-[100%] rounded-lg bg-[#A9A9A9] ">
          {products.map((product, index) => (
            <li className="p-[5px] shadow-md items-center rounded-lg flex justify-between text-white bg-orange mb-[10px] h-[100px]" key={index}>
              <figure >
                <img className='w-[100%] h-[90px] rounded-md' src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/0997c2185580241.65694b1bc9a96.jpg' alt={product.name} />
              </figure>
              <div className="flex flex-col items-center">
                <p className="font-bold text-[1.1rem] ">{product.name}</p>

                <p className="font-bold text-dark-gray bg-white w-[50px] rounded-sm">${product.price}</p>
                <button>
                  <p className="text-dark-gray text-sm">ver mas...</p>
               </button>
              </div>
              <button  onClick={() => addToCart(product)}>
              <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      className="w-12 h-12"
    > <path d="M.5 1a.5.5 0 000 1h1.11l.401 1.607 1.498 7.985A.5.5 0 004 12h1a2 2 0 100 4 2 2 0 000-4h7a2 2 0 100 4 2 2 0 000-4h1a.5.5 0 00.491-.408l1.5-8A.5.5 0 0014.5 3H2.89l-.405-1.621A.5.5 0 002 1H.5zM6 14a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zM9 5.5V7h1.5a.5.5 0 010 1H9v1.5a.5.5 0 01-1 0V8H6.5a.5.5 0 010-1H8V5.5a.5.5 0 011 0z" />
    </svg>
              </button>
             

            </li>
          ))}
        </ul>
      </div>
  )
}

export default FilterResult