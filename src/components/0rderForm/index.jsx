import React from 'react'
import { useForm } from 'react-hook-form'
import ShoppingCart from '../shoppingCart'

const OrderForm = () => {
  const {register, handleSubmit}=useForm
  return (
    <div className=' w-[full] text-left mb-3'>
      <div className='flex flex-col  gap-1 mb-[10px]'>
          <label htmlFor="">Tipo de Pedido</label>
         <select name="" id="">
          <option value="domi">Domicilio</option>
          <option value="colo">Consumo Local</option>
         </select>
      </div>


      <form className='border border-orange rounded-lg  p-[10px]' action="">
        <div className=' flex flex-col  gap-1 mb-[10px]'>
          <label htmlFor="">Nombre</label>
          <input className='w-full' type="text"  name=''/>
        </div>
      
        <div className='flex flex-col  mb-[10px]' >
          <label htmlFor="">Dirección</label>
          <div className='flex gap-2'>
            <select className='w-14' name="" id="">
              <option value="carrera">carrera</option>
              <option value="calle">calle</option>
              <option value="diagonal">diagonal</option>
            </select>
            <input className='w-14' type="text" />
            <p>#</p>
            <input className='w-14'  type="text" />
            <p>-</p>
            <input className='w-14'  type="text" />

          </div>
      
        </div>
        <div className='flex flex-col mb-2'  >
          <label htmlFor="">Barrio, Casa o punto de referencia?</label>
          <input className='w-full' type="text"  name=''/>
        </div>
        <div className='flex flex-col mb-2 '  >
          <label htmlFor="">Agrega notas a tu pedido y da click en "Enviar a WhatsApp"</label>
          <input className='w-full' type="text"  name=''/>
        </div>
        <ShoppingCart/>
      </form>
    </div>
  )
}

export default OrderForm