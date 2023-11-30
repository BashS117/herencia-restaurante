
import React from 'react'

const UseReducer = () => {
    const initialState={
        panelOpen: false,
    }                  //recibe nuestro reducer, y nuestro objeto del estaod compuesto con la que vamos iniciar nuestr compnente la primera vez que se renderiza
const [state,dispatch]= React.useReducer(reducer,initialState);

const reducerObject=(state)=>({
    'PANELOPEN':{
        ...state,
        panelOpen:true,
    }
})

const reducer = (state,action)=>{
    if(reducerObject(state)[action.type]){
        return reducerObject(state)[action.type];
    }else{
        return state
    }
}

  return (
    <div>UseReducer</div>
  )
}

export default UseReducer