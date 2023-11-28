import { useContext } from "react";
import { AppContext } from '../../Context/AppContext';


const AcordionPanel = ({ products,category }) => {

    const {state}=useContext(AppContext)

    return (
      <div className={`${state.panelOpen && state.selectedCategory === category ? 'flex' : 'hidden'}`}>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
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