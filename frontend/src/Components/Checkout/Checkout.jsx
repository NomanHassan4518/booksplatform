import React , {useState} from 'react'
import DeliveryOption from './DeliveryOption'
import Order from './Order'

const Checkout = () => {
    const [receivedObject, setReceivedObject] = useState(null);

    const data = (object) => {
        setReceivedObject(object);
      };

      console.log(receivedObject);

    return (
        <div className='lg:px-14 px-4 py-12 w-full mx-auto md:grid md:grid-cols-12 sm:flex sm:flex-col'>
            <div className='md:col-span-7'>
                <DeliveryOption  userData={data}/>
            </div>
            <div className="md:col-span-5 ">
                <Order />
            </div>
        </div>
    )
}

export default Checkout