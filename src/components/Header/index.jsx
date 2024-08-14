import React from 'react'
import { AppContext } from '../../Context/AppContext'
import { useContext } from 'react'

const Header = () => {
    const {setFilter}=useContext(AppContext)
  return (
    <header className='w-full'>
        <div className='flex flex-col justify-between '>
            <figure >
                <img className='h-20 w-full ' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7ba065202162713.668198dc8a0d9.png" alt="logo" />
            </figure>
            <figure className='absolute top-8 left-3 shadow-md p-1 bg-white' >
                <img className='w-[100px] h-[100px] ' src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/90afe3202162713.668196ce7fc88.png" alt="logo" />
            </figure>
            <div className='mt-[2px] pl-[32%] text-start'>
                <h1 className='titlePage text-[1.8rem]  text-black '>Herencia Restaurante</h1>
                
                
            </div>
            <div className='flex gap-1 items-end justify-evenly'>
                    <p className='text-[0.8rem] bg-[#FFC107] rounded-sm px-1 text-white  '>Cra 8 #6-44 Corinto</p>
                    <p  className='text-[0.8rem]  bg-[#FFC107] rounded-sm px-1 text-white '>Cel: 322 533 4974</p>
                </div>
            <ul className='text-[0.7rem] px-4 justify-between flex'>
                    <li> 1. Elige categoría y escoge tu producto</li>
                    <li> 2. Envia tu pedido y espera tu domicilio</li>
                </ul>
        </div>
        <input className='w-[80%] h-[30px] mt-2 py-1 pr-1 text-[1.4rem]' 
        onChange={(event) => setFilter(event.target.value.trim() || null)}
        placeholder='🔎 Busca tu comida'
        type="search" />
    </header>
  )
}

export default Header