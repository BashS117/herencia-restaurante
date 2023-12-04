import React from 'react'
import { useForm } from 'react-hook-form'

const OrderForm = () => {
  const {register, handleSubmit}=useForm
  return (
    <div className=' w-[350px] p-[5px]'>
      <div className='flex flex-col items-start gap-1 mb-[10px]'>
          <label htmlFor="">Tipo de Pedido</label>
         <select name="" id="">
          <option value="domi">Domicilio</option>
          <option value="colo">Consumo Local</option>
         </select>
      </div>


      <form className='border border-orange rounded-lg  p-[10px]' action="">
        <div className=' flex flex-col items-start gap-1 mb-[10px]'>
          <label htmlFor="">Nombre</label>
          <input className='w-full' type="text"  name=''/>
        </div>
      
        <div className='flex flex-col items-start mb-[10px]' >
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
        <div className='flex flex-col items-start'  >
          <label htmlFor="">Barrio,Casa o punto de referencia?</label>
          <input className='w-full' type="text"  name=''/>
        </div>
      </form>
    </div>
  )
}

export default OrderForm