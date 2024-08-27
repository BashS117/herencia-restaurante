import React from 'react'
import FilterResult from '../FilterResult'
import { AppContext } from '../../Context/AppContext'
import { useContext,useState } from 'react'
import MenuSlider from '../MenuSlider'
import MenuCategory from '../MenuCategory'
import  products from '../../data/products.json'
import  platosFuertes from '../../data/secondaryProducts.json'
const Home = () => {
  const { filteredProducts, active } = useContext(AppContext);
  console.log("PRODUCTOS FILTRADOS: ", filteredProducts);

  const renderFilter = () => {
    if (filteredProducts?.length > 0) {
      return (<div className='text-start '>
       <h3 className='p-2 text-xl font-medium'>Coincidencias:</h3> 
        <FilterResult products={filteredProducts} />
      </div>);
    } 
    // else {
    //   return (
    //     <div className="flex mt-[10px] gap-[10px] w-full relative">
    //       <AcordionLeft />
    //       <AcordionRight />
    //     </div>
    //   );
    // }
  };

  return (
    <section className="px-0">
      <MenuSlider />
      <div className="space-y-8">
        {renderFilter()}
        {active === "Platos fuertes" ? (
          <MenuCategory title="Platos Fuertes" items={products} />
        ) : null}

        {active === "Menu rapido" ? (
          <MenuCategory
            title="Menú Normal"
            items={platosFuertes}
          />
        ) : null}
      </div>
    </section>
  );
};

export default Home;