import React from 'react'

const AcordionHeadingItem = ({category,index,handlePanelOpen,rightPanel,isPanelOpen}) => {
  console.log(isPanelOpen)
    const handleClick = ()=>{
        handlePanelOpen(category)
    }
  return (
    <div className={`${rightPanel? 'h-[110px]':'h-[75px]'} items-center p-[5px] flex justify-between mb-[10px]  border-[1px] border-orange rounded-lg`} onClick={handleClick} >
        <div className={`${rightPanel? 'flex flex-col':'flex  items-center '} gap-[5px] w-full`}>
        <figure>
              <img className='w-[100%] h-[68px] rounded-md' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3ee19c185580241.65675bb1bb62f.jpg" alt="" />
          </figure>
          <p className={index === 0 ? 'whitespace-normal break-words w-[68px]' : ''}>   {category}</p>
        </div>
      
        {isPanelOpen? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
      </svg>
      :
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
        </svg> 
      }

   </div>
  )
}

export default AcordionHeadingItem