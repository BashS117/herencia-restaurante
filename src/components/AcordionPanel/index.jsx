import { useContext } from "react";
import { AppContext } from '../../Context/AppContext';


const AcordionPanel = ({ products,category ,rightPanel}) => {

    const {state,dispatch}=useContext(AppContext)

    //funcion para agregar  un producto al carrito 
    const addToCart = (product)=>{
      const itemToAdd = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity:1,
        category: category
        //otras propiedades
      }
      //Despacho la accion  add_to_ cart con el item como payload
      dispatch({
        type:'ADD_TO_CART', 
        payload: itemToAdd
      })
      console.log('Nuevo estado:', state);
    }

    return (
      <div className={`${rightPanel?'relative left-[-175px] w-[300px]':''} w-[160%] relative ${state.panelOpen && state.selectedCategory === category ? 'flex' : 'hidden'}`}>
        <ul className="w-[100%] rounded-lg bg-[#A9A9A9] ">
          {products.map((product, index) => (
            <li className="p-[5px] shadow-md items-center rounded-lg flex justify-between text-white bg-orange mb-[10px] h-[100px]" key={index}>
              <figure >
                <img className='w-[100%] h-[90px] rounded-md' src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/0997c2185580241.65694b1bc9a96.jpg' alt={product.name} />
              </figure>
              <div>
                <p>{product.name}</p>

                <p>${product.price}</p>
                <button>
                  <p>ver mas...</p>
               </button>
              </div>
              <button  onClick={() => addToCart(product)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              </button>
             

            </li>
          ))}
        </ul>
      </div>
    );
  };

  
export default AcordionPanel