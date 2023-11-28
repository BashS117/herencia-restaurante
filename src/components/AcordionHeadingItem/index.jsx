import React from 'react'

const AcordionHeadingItem = ({category,handlePanelOpen,PanelClose,isPanelOpen}) => {
    const handleClick = ()=>{
        handlePanelOpen(category)
        if(isPanelOpen){
        PanelClose()}
    }
  return (
    <div onClick={handleClick} >{category}</div>
  )
}

export default AcordionHeadingItem