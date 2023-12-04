import React from 'react'
import { Link } from 'react-router-dom'

const ShoppingCart = () => {
  return (
    <div className='border border-orange rounded-lg'>
        <div className='flex justify-between items-center p-6'>
          <h2 className='font-medium text-xl'>My Order</h2>    
        </div>
    <div className='px-6 overflow-y-scroll flex-1'>
    {/* {cartProducts.map(product=>(
      <OrderCard 
      key={product.id}
      id={product.id}
      title={product.title}
      imageUrl={product.images}
      price={product.price}
      handleDelete={handleDelete}
      />
  ))}
   */}
    </div>

    <div className='px-6 mb-6'>
      <p className='flex justify-between items-center mb-2'> 
        <span className='font-light'>Total:</span>
        <span className='font-medium '>Precio Total</span>
      </p>
      <Link to=''>
        <button
    className='w-full bg-[#25d366] py-3 text-white rounded-lg'
     >
    Enviar a WhatsApp
    </button>
      </Link>
    
    </div>
 
   
  </div>
  )
}

export default ShoppingCart