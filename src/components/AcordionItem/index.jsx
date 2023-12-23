import React from 'react'
import AcordionHeadingItem from '../AcordionHeadingItem';
import AcordionPanel from '../AcordionPanel';
import { useContext } from "react";
import { AppContext } from '../../Context/AppContext';


const AcordionItem = ({data,index,rightPanel}) => {
    
    const {category,categoryImg,products}= data;

    const {state,dispatch}=useContext(AppContext)
    
console.log("state.panelOpen:", state)

    const handlePanelOpen = (category) => {        
         console.log('Categoría seleccionada:', category);
        dispatch({ 
            type: 'PANELOPEN', 
            payload: category
        });
      };


    console.log("datat:",data)
  return (  
    <div>
        <AcordionHeadingItem 
        rightPanel={rightPanel}
        category={category}
        categoryImg={categoryImg}
        index={index}
        isPanelOpen={state.panelOpen && state.selectedCategory === category}
        handlePanelOpen={handlePanelOpen}
        />
         <AcordionPanel rightPanel={rightPanel} category={category} products={products}/>
       


    </div>
  )
}

export default AcordionItem                     