import secondaryProducts from '../../data/secondaryProducts.json'
import AcordionItem from '../AcordionItem';
const AcordionRight = () => {
    return (
      <div className='w-[40%]'>
         {
            secondaryProducts.map((data, index)=>(
                <AcordionItem rightPanel={true} key={index} data={data} />
            ))
        }
      </div>
    )
  }
  
  export default AcordionRight;