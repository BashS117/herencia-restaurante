import React from 'react'
import { useState,useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import { useForm } from 'react-hook-form'
import ShoppingCart from '../shoppingCart'

const OrderForm = () => {
  const {register,formState:{errors}, handleSubmit}=useForm();

  const {state}=useContext(AppContext)

  let sum= 0;
  state.cart.forEach(element => sum += element.price*element.quantity);
  
  const productNameandPrice = state.cart
  .map((product) => `${product.name} %0A (V/U:  $${product.price}m) x *${product.quantity}*= $${product.price*product.quantity}000,%0A`);
  const productsText = productNameandPrice.join(' ');



//ENVIAR EL PEDIDO
  const onSubmit =(data)=>{
    console.log('orderFormDATA:',data)
    //texto del link para google Maps
let googleMapsUrl = `*Google Map:* https://www.google.com/maps/place/${data.direccionprincipal}%2B${data.direccionuno}%2B%2523%2B${data.direcciondos}%2B-%2B${data.direcciontres},%2BCorinto%2BCauca`
if(selectedOption==='Consumo Local'){
googleMapsUrl='';
}
    //texto con el nombre y direccion y nota
    // const customerNameandAdress =`________________ %0A*Entregar a*: ${data.nombre},%0A*Tipo de Pedido:* ${selectedOption},%0A*Dirección:* ${data.direccionprincipal} ${data.direccionuno} %23${data.direcciondos}-${data.direcciontres}, ${data.barrio} %0A${data.notas?`*Notas:* ${data.notas}`:''}`;

    let customerNameandAdress = ``;

    if (selectedOption === 'Domicilio') {
      customerNameandAdress = `________________ %0A*Entregar a*: ${data.nombre},%0A*Tipo de Pedido:* ${selectedOption},%0A*Dirección:* ${data.direccionprincipal} ${data.direccionuno} %23${data.direcciondos}-${data.direcciontres}, ${data.barrio} %0A${data.notas?`*Notas:* ${data.notas}`:''}`;
    } else {
      customerNameandAdress = `________________ %0A*Entregar a*: ${data.nombre},%0A*Tipo de Pedido:* ${selectedOption},%0A ${data.notas?`*Notas:* ${data.notas}`:''}`;
    }
    

    //texto link a whatsapp
    const whatsappUrl = `https://api.whatsapp.com/send?phone=573225334974&text=${googleMapsUrl} %0A*¡Nuevo Pedido!*🛵%0A Restaurante Corralazo %0A*Productos*: %0A ${productsText} %0A*Valor total:* $${sum}000 %0A ${customerNameandAdress} `;

    window.location.href = whatsappUrl; // Redirigir a WhatsApp

  }

  const [selectedOption, setSelectedOption] = useState('Domicilio');

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
  };
  
  return (
    <div className=' w-[full] text-left mb-3 px-2'>
      <div className='flex flex-col  gap-1 mb-[10px]'>
          <label htmlFor="">Tipo de Pedido</label>
         <select onChange={handleSelectChange} value={selectedOption} id=""
             >
          <option value="Domicilio">Domicilio</option>
          <option value="Consumo Local">Consumo Local</option>
         </select>
      </div>

{selectedOption === "Domicilio"?
 <form 
 onSubmit={handleSubmit(onSubmit)}
 className='border border-dark-gray rounded-lg  p-[10px]' action="">
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
        })} id="">
         <option value="Cra.">carrera</option>
         <option value="Cl.">calle</option>
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
   <ShoppingCart sum={sum}/>
 </form>
 :
 <form
 onSubmit={handleSubmit(onSubmit)}
 className='border border-dark-gray  rounded-lg  p-[10px]' 
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
   <div className='flex flex-col mb-2 '  >
     <label htmlFor="">Agrega notas a tu pedido y da click en "Enviar a WhatsApp"</label>
     <input 
     className='w-full' 
     {...register('notas')}
     type="text" />
   </div>
   <ShoppingCart sum={sum}/>

  </form>}
     
    </div>
  )
}

export default OrderForm