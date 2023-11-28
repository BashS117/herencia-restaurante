import React from 'react'

const AcordionHeadingItem = ({category,handlePanelOpen,}) => {
    const handleClick = ()=>{
        handlePanelOpen(category)
    }
  return (
    <div onClick={handleClick} >{category}</div>
  )
}

export default AcordionHeadingItem