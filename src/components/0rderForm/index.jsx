import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import ShoppingCart from '../shoppingCart'

const OrderForm = () => {
  const {register,formState:{errors}, handleSubmit}=useForm();

  const onSubmit =(data)=>{
    console.log('orderFormDATA:',data)
  }

  const [selectedOption, setSelectedOption] = useState('domi');

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
  };
  
  return (
    <div className=' w-[full] text-left mb-3'>
      <div className='flex flex-col  gap-1 mb-[10px]'>
          <label htmlFor="">Tipo de Pedido</label>
         <select onChange={handleSelectChange} value={selectedOption} name="" id=""
             >
          <option value="domi">Domicilio</option>
          <option value="colo">Consumo Local</option>
         </select>
      </div>

{selectedOption === "domi"?
 <form 
 onSubmit={handleSubmit(onSubmit)}
 className='border border-orange rounded-lg  p-[10px]' action="">
   <div className=' flex flex-col  gap-1 mb-[10px]'>
     <label htmlFor="">Nombre</label>
     <input className='w-full'
      type="text" 
      {...register('nombre', {
       required:true,
       maxLength:10
      })}
       />
       {errors.nombre?.type==='required' && <p>El nombre es requerido</p>}
       {errors.nombre?.type==='maxLength' && <p>El nombre debe tener menos de 10 caracteres</p>}
   </div>
 
   <div className='flex flex-col  mb-[10px]' >
     <label htmlFor="">Dirección</label>
     <div className='flex gap-2'>
       <select className='w-14'  
       {...register('direccionprincipal', {
         required:true
        })} name="" id="">
         <option value="carrera">carrera</option>
         <option value="calle">calle</option>
         <option value="diagonal">diagonal</option>
       </select>
       <input 
       className='w-14'
         {...register('direccionuno', {
           required:true,
           maxLength:3,
          })}
         type="text" />
       <p>#</p>
       <input 
         className='w-14'
         {...register('direcciondos', {
           maxLength:3,
           required:true
          })}
         type="text" 
         />
       <p>-</p>
       <input 
       className='w-14' 
       {...register('direcciontres', {
         maxLength:3,
         required:true
        })}
        type="text" />

     </div>
 
   </div>
   <div className='flex flex-col mb-2'  >
     <label htmlFor="">Barrio, Casa o punto de referencia?</label>
     <input 
     className='w-full' 
     {...register('barrio', {
       maxLength:50
      })}
     type="text"/>
   </div>
   <div className='flex flex-col mb-2 '  >
     <label htmlFor="">Agrega notas a tu pedido y da click en "Enviar a WhatsApp"</label>
     <input 
     className='w-full' 
     {...register('notas')}
     type="text" />
   </div>
   <ShoppingCart/>
 </form>
 :
 <form
 onSubmit={handleSubmit(onSubmit)}
 >
   <div className=' flex flex-col  gap-1 mb-[10px]'>
     <label htmlFor="">Nombre</label>
     <input className='w-full'
      type="text" 
      {...register('nombre', {
       required:true,
       maxLength:10
      })}
       />
       {errors.nombre?.type==='required' && <p>El nombre es requerido</p>}
       {errors.nombre?.type==='maxLength' && <p>El nombre debe tener menos de 10 caracteres</p>}
   </div>

   <div className=' flex flex-col  gap-1 mb-[10px]'>
     <label htmlFor="">Mesa:</label>
     <input className='w-full'
      type="text" 
      {...register('mesa', {
       required:true,
       maxLength:10
      })}
       />
       {errors.mesa?.type==='required' && <p>El numero de mesa es requerido</p>}
       {errors.mesa?.type==='maxLength' && <p>El numero es incorrecto</p>}
   </div>
   <ShoppingCart/>

  </form>}
     
    </div>
  )
}

export default OrderForm