import React from 'react'
import { AppContext } from '../../Context/AppContext'
import { useContext } from 'react'

const Header = () => {
    const {setFilter}=useContext(AppContext)
  return (
    <header className='w-full'>
        <div className='flex justify-between '>
            <figure>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/3d0cfc185580241.656649b978204.png" alt="" />
            </figure>
            <div className='w-[65%] mt-[10px]'>
                <h1>Corralazo</h1>
                <p>Comidas Rapidas</p>
                <p>Calle 5 #9-40 Corinto</p>
                <p>Cel: 323 475 4284</p>
                <ol className='text-[0.7rem]'>
                    <li> Elige categoría y escoge tu producto</li>
                    <li> Envia tu pedido y espera tu domicilio</li>
                </ol>
            </div>
        </div>
        <input className='w-[80%]' 
        onChange={(event)=>setFilter(event.target.value)}
        type="text" />
    </header>
  )
}

export default Header