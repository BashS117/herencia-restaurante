import { createContext, useContext, useReducer } from "react";

export const AppContext = createContext();

export const AppProvider =({children})=>{

    const initialState={
        panelOpen: false,
        selectedCategory: null, // Nuevo campo para almacenar la categoría seleccionada

    }  

    const reducerObject=(state,category)=>({
        'PANELOPEN':{
            ...state,
            panelOpen: true,
          selectedCategory: category,
        },
        'PANELCLOSE':{
            ...state,
            panelOpen: false,
            selectedCategory: null,

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




return (
    <AppContext.Provider value={
        {
            state,dispatch
        }
    }>
{children}
    </AppContext.Provider>
)
    
}
