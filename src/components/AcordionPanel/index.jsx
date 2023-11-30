import { useContext } from "react";
import { AppContext } from '../../Context/AppContext';


const AcordionPanel = ({ products,category ,rightPanel}) => {

    const {state}=useContext(AppContext)

    return (
      <div className={`${rightPanel?'relative left-[-175px] w-[300px]':''} w-[160%] relative ${state.panelOpen && state.selectedCategory === category ? 'flex' : 'hidden'}`}>
        <ul className="w-[100%]">
          {products.map((product, index) => (
            <li className="bg-orange mb-[10px]" key={index}>
              <div>
                {/* <img src={product.image} alt={product.name} /> */}
              </div>
              <div>
                <p>{product.name}</p>
                <p>Precio: ${product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  
export default AcordionPanel