import React from 'react'

const AcordionHeadingItem = ({category,handlePanelOpen,}) => {
    const handleClick = ()=>{
        handlePanelOpen(category)
    }
  return (
    <div className='mb-[10px]  border-[1px] border-[#FF570C] rounded-lg' onClick={handleClick} >{category}</div>
  )
}

export default AcordionHeadingItem