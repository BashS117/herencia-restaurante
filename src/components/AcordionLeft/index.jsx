import  products from '../../data/products.json'
import AcordionItem from '../AcordionItem'

const AcordionLeft = () => {
    console.log(products)
 
  return (
    <div className='w-[60%]'>
       
        {
            products.map((data,index)=>(
                <AcordionItem key={index} index={index} data={data} />
            ))
        }

    </div>
  )
}

export default AcordionLeft