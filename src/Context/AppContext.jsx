import { createContext, useContext, useReducer } from "react";

export const AppContext = createContext();

export const AppProvider =({children})=>{

    const initialState={
        panelOpen: false,
        selectedCategory: null, // Nuevo campo para almacenar la categoría seleccionada
        cart: [], //elementos del carrito

    }  

    const reducerObject=(state,payload)=>({
        'PANELOPEN':{
            ...state,
            panelOpen: state.selectedCategory !== payload || !state.panelOpen,
          selectedCategory: payload,
        },  
        'ADD_TO_CART': {
            ...state,
            cart:[...state.cart,payload],//añadir el elemento al carrito
        },
        'REMOVE_FROM_CART': {
            ...state,
            cart:state.cart.filter(item=>item.id !=payload.id)//eliminar elemento del carrito
        }
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
  
   const removeFromCart = (dispatch, item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };



return (
    <AppContext.Provider value={
        {
            state,dispatch,
            addToCart,removeFromCart
        }
    }>
{children}
    </AppContext.Provider>
)
    
}
