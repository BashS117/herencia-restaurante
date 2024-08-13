import React from 'react'
import AcordionLeft from '../AcordionLeft'
import AcordionRight from '../AcordionRight'
import FilterResult from '../FilterResult'
import AcordionPanel from '../AcordionPanel'
import { AppContext } from '../../Context/AppContext'
import { useContext,useState } from 'react'
const Home = () => {

  const {filteredProducts}= useContext(AppContext)
  console.log("PRODUCTOS FILTRADOS: ",filteredProducts)

  const renderFilter =()=>{
    if (filteredProducts?.length > 0) {
      return (
  <FilterResult 
   products={filteredProducts}
   />
      )
    }else{
      return(
<div className='flex mt-[10px] gap-[10px] w-full relative'>
      
        <AcordionLeft/>
        <AcordionRight/>


    </div>      )
    }
  
  }
  function MenuCategory({ title, items }) {
    return (
      <section>
      <h2 className="text-2xl font-semibold text-gray-700 bg-gray-200 p-2 rounded-md">{title}</h2>
      <div className="mt-4 flex flex-wrap gap-6">
        {items.map((category, index) => (
          <div key={index} className="flex-1 min-w-[180px] bg-white shadow-md rounded-lg overflow-hidden">
            <h3 className="bg-gray-300 p-3 text-xl font-medium text-gray-800">{category.title}</h3>
            <ul className="p-4 space-y-2">
              {category.dishes.map((dish, idx) => (
                <DishItem key={idx} name={dish.name} details={dish.details} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
    );
  }

  function DishItem({ name, details }) {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <li className="cursor-pointer text-gray-600">
        <div onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center p-2 bg-gray-100 rounded-md hover:bg-gray-200">
          <span>{name}</span>
          <span>{isOpen ? '−' : '+'}</span>
        </div>
        {isOpen && (
          <div className="p-2 mt-2 bg-gray-50 border border-gray-300 rounded-md">
            <p>{details}</p>
          </div>
        )}
      </li>
    );
  }

  return (<section className='px-2'>
            <div className="space-y-8">
          <MenuCategory
            title="Platos Fuertes"
            items={[
              { title: 'Res', dishes: [
                { name: 'TINDARINDA - Seviche de Punta de Anca', details: '300gr de punta de anca en una cama de guacamole, acompañado de papas criollas y pico de gallo.' },
                { name: 'PISPIRISPI', details: 'Lomo fino salteado en salsa soja y vegetales, acompañado de un cremoso de papa y crocante de platano.' },
                { name: 'MINCHO', details: 'Churrasco lomo caracho, 350gr previamente marinado, asado a a la parrilla acompañado de papas a la francesa y ensalada.' }
              ] },
              { title: 'Cerdo', dishes: [
                { name: 'LA CAPITANA', details: 'Medallones de cedo de 150gr en una salsa criolla de lulo con BBQ, acompañado de papas a la francesa y ensalada.' },
                { name: 'LEOPOLDINA', details: 'Cerdo agridulce - lomo de cerdo troceado, salteado acompañado de una causa limeña y salsa agridulce con vegetales.' },
                { name: 'DON JACOBITO', details: 'Tomahawk de cerdo chimichurri acompañado de cremoso de papa y ensalada.' }
              ] },
              { title: 'Pollo', dishes: [
                { name: 'GALLETA', details: '300gr - filete de pollo previamente marinado, acompañado de papas a la francesa, ensalada y chimichurri.' },
                { name: 'BOMBA', details: '300gr - filete de pollo previamente marinado, bañado en salsa de maíz tierno y tocineta, acompañado de papas a la francesa y ensalada' },
                { name: 'UVITA', details: '300gr - filete de pollo previamente marinado, bañado en una demiglace de frutos rojos, acompañado de papas a la francesa y ensalada' }
              ] }
            ]}
          />
          <MenuCategory
            title="Menú Normal"
            items={[
              { title: 'Sandwiches', dishes: [
                { name: 'Sandwich 1', details: 'Detalles del Sandwich 1' },
                { name: 'Sandwich 2', details: 'Detalles del Sandwich 2' },
                { name: 'Sandwich 3', details: 'Detalles del Sandwich 3' },
                { name: 'Sandwich 4', details: 'Detalles del Sandwich 4' },
                { name: 'Sandwich 5', details: 'Detalles del Sandwich 5' }
              ] },
              { title: 'Pan Cook', dishes: [
                { name: 'Pan Cook 1', details: 'Detalles del Pan Cook 1' },
                { name: 'Pan Cook 2', details: 'Detalles del Pan Cook 2' },
                { name: 'Pan Cook 3', details: 'Detalles del Pan Cook 3' },
                { name: 'Pan Cook 4', details: 'Detalles del Pan Cook 4' }
              ] },
              { title: 'Hamburguesas', dishes: [
                { name: 'Hamburguesa 1', details: 'Detalles de la Hamburguesa 1' },
                { name: 'Hamburguesa 2', details: 'Detalles de la Hamburguesa 2' },
                { name: 'Hamburguesa 3', details: 'Detalles de la Hamburguesa 3' },
                { name: 'Hamburguesa 4', details: 'Detalles de la Hamburguesa 4' },
                { name: 'Hamburguesa 5', details: 'Detalles de la Hamburguesa 5' }
              ] },
              { title: 'Alas', dishes: [
                { name: 'Ala 1', details: 'Detalles de la Ala 1' },
                { name: 'Ala 2', details: 'Detalles de la Ala 2' },
                { name: 'Ala 3', details: 'Detalles de la Ala 3' },
                { name: 'Ala 4', details: 'Detalles de la Ala 4' },
                { name: 'Ala 5', details: 'Detalles de la Ala 5' }
              ] }
            ]}
          />
        </div>

  </section>
  )
}

export default Home