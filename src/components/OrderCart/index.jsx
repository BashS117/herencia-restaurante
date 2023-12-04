import React from 'react'

const OrderCart = () => {
  return (
  <div className="flex justify-between items-center py-2 border-b-[1px] border-orange ">
      <figure className="w-20 h-20">
            <img className="w-full h-full rounded-lg object-cover" src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3ee19c185580241.65675bb1bb62f.jpg' alt='' />
      </figure>
    <div className="flex flex-col items-center gap-2">   
        <p className="text-sm font-light">Hamburguesa</p>
        <div className='text-[12px] flex gap-2'>      
              <span>$15000</span>x <span>1</span>
        </div>
    </div>
    <div className='flex flex-col'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-11 h-11">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-11 h-11">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>


    </div>
    <div className="flex items-center gap-2">
          <p className="text-lg font-medium">$15000</p>
          
      </div>

  </div>
  )
}

export default OrderCart