import  products from '../../data/products.json'
import AcordionItem from '../AcordionItem'

const AcordionLeft = () => {
    console.log(products)
 
  return (
    <div className='w-[60%]'>
       
        {
            products.map((data)=>(
                <AcordionItem key={data.index} data={data} />
            ))
        }

    </div>
  )
}

export default AcordionLeft