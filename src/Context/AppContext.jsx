import { createContext, useContext, useReducer,useState,useEffect } from "react";
import secondaryProducts from '../data/secondaryProducts.json'
import  products from '../data/products.json'
import swal from 'sweetalert2'
 
export const AppContext = createContext();

export const AppProvider =({children})=>{

    const initialState={
        panelOpen: false,
        selectedCategory: null, // Nuevo campo para almacenar la categoría seleccionada
        cart: [], //elementos del carrito

    }  

    // Unir los dos arrays
  const allProducts = products.concat(secondaryProducts);

  // Estado para el valor del input de filtrado
  const [filter, setFilter] = useState(null);
     //productos filtrados
     const [filteredProducts,setFilteredProducts]=useState(null);
//categoria activa
     const [active, setActive] = useState("Menu rapido");



     const filteredProductsByTitle = (allProducts, filter) => {
      return allProducts.flatMap(category => category.dishes.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())));
    };

  const filterBy = (searchType,allProducts,filter)=>{
    if(searchType==='BY_TITLE'){
     return   filteredProductsByTitle(allProducts,filter)
    }

    // if(!searchType){
    //     return perfumes
    //    }

}

  useEffect(() => {
    if(!filter)setFilteredProducts(null)
    if (filter){
      setFilteredProducts(filterBy('BY_TITLE', allProducts, filter, ))
  }
  // if(active){setFilter(null)}
  
  
}, [ filter,active])



    const reducerObject=(state,payload)=>({
        'PANELOPEN':{
            ...state,
            panelOpen: state.selectedCategory !== payload || !state.panelOpen,
          selectedCategory: payload,
        },  
        'ADD_TO_CART': {
            ...state,
            cart: state.cart.map(item =>
              item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item
            ).concat(
              state.cart.find(item => item.id === payload.id) ? [] : payload
            ),
          },
        'INCREMENT_QUANTITY': {
            ...state,
            // Incrementar la cantidad del producto específico en el carrito
            cart: state.cart.map(item =>
              item.id === payload ? { ...item, quantity: item.quantity + 1 } : item
            ),
          },
          'DECREMENT_QUANTITY': {
            ...state,
            // Decrementar la cantidad del producto específico en el carrito
            cart: state.cart.map(item =>
              item.id === payload ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
            ),
          },
          'REMOVE_FROM_CART': {
            ...state,
            // Eliminar el producto del carrito si la cantidad es 1
            cart: state.cart.filter(item => (item.id !== payload) || (item.id === payload && item.quantity > 1)),
          },
        
    })


    const reducer = (state,action)=>{
        if(reducerObject(state,action.payload)[action.type]){
            return reducerObject(state,action.payload)[action.type];
        }else{
            return state
        }
    }

    const [state,dispatch]= useReducer(reducer,initialState);
    
console.log("state",state)

//defino acciones relacionadas con el carrito 

 const addToCart = (dispatch, item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };
  
 
// acciones relacionadas con aumentar y reducir la cantida de los productsCarts
  const incrementQuantity = (dispatch, id) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: id });
  };
  
  const decrementQuantity = (dispatch, item) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: item });
  };
  const removeFromCart = (dispatch, item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };
//funcion para mostrar alerta al agregar producto al carrito
  const mostrarAlert=()=>{
    swal.fire({
      text: "Se ha añadido al carrito",
      icon: "success",
      toast: true,
      position: 'top',
      timer: '3000',
      showConfirmButton: false,
      color: '#FF570C'
      
    
    })
  }


return (
    <AppContext.Provider value={
        {
            state,dispatch,
            removeFromCart,
            setFilter,
            filteredProducts,
            mostrarAlert,
            active,setActive
        }
    }>
{children}
    </AppContext.Provider>
)
    
}
