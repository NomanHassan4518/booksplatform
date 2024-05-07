import React, { useState } from 'react'
import Spinner from '../Spinner';
import CheckOutTextArea from './CheckOutTextArea';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { emptyCart } from '../Redux/Action/Action';

const Checkout = ({responseAPI} ) => {
    const [loading,setLoading]=useState(false)
    let productData = useSelector((state) => state.cardData)
    let totalPrice = useSelector((state) => state.totalPrice)
    const [check, setCheck] = useState("cash")
    let dispatch = useDispatch()
    let navigate = useNavigate()
  
    let orderItems = productData.map((book) => ({ 
      bookId: book.Product._id,
      quantity: book.quantity, // Default quantity
    }))


    const handleOrder = async () => {
      try {
        setLoading(true)
        const response = await axios.put(`https://booksplatform-theta.vercel.app/book`, { orderItems });
        responseAPI(response.data)
        dispatch(emptyCart())
  
        if (response.data.message==='Stocks updated successfully') {
          navigate('/')
        }
        
      } catch (error) {
        console.error('Error placing order:', error);
      } finally {
        setLoading(false)
      }
  
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling animation
      });
    };
  

    let paymentMethod = [
      {
        type: "Stripe",
        url: "https://apna.ignitehq.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcomponents%2Fassets%2FcardImg.7a524e7eee46cdc62481e3df275c3db7.jpg&w=828&q=75"
      },
      {
        type: "Tap",
        url: "https://apna.ignitehq.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcomponents%2Fassets%2FcardImg.7a524e7eee46cdc62481e3df275c3db7.jpg&w=828&q=75"
      }
    ]
  
    const payment = (item) => {
      setCheck(item)
    }
  
    const cash = () => {
      setCheck("cash")
    }
  
  
    let shippingFee = 0
  
    productData.map((item => {
      return shippingFee += item.quantity * 30
    }))


    let person = localStorage.getItem("user")
    let data = JSON.parse(person)
    let formFieldName = {
        firstName: data.name,
        email: data.email, 
        phone: "",  
        note:"" 
    }
    const [field, setField] = useState(formFieldName)



    return (
       loading?<Spinner/>: <div className='lg:px-14 px-4 py-12 w-full mx-auto md:grid md:grid-cols-12 sm:flex sm:flex-col'>
       <div className='md:col-span-7'>
       <div className='md:px-4'>
            <div className='flex flex-col w-full '>

                <div className='mt-6'>
                    <h1 className='text-2xl font-bold mb-6'>Shipping Address</h1>

                    <div className='grid gap-4 grid-cols-12'>
                        <div className='col-span-6'>
                            <label htmlFor="firstName" className='block text-gray-600 text-sm font-semibold mb-3'>Name *</label>
                            <input type="text" id='firstName' name='firstName' value={field.firstName} className='border-[1px] border-gray-200 rounded-md w-full py-2 px-4 focus:ring-black focus:border-none focus:ring-[1px]'
                                onChange={(e) => {
                                    setField({
                                        ...field,
                                        firstName: e.target.value
                                    }
                                    )

                                }}

                            />
                        </div>


                        <div className='col-span-6'>
                            <label htmlFor="email" className='block text-gray-600 text-sm font-semibold mb-3'>Email *</label>
                            <input type="email" id='email' name='email' value={field.email} className='border-[1px] border-gray-200 rounded-md w-full px-4 py-2 focus:ring-black focus:border-none focus:ring-[1px]' onChange={(e) => {
                                setField({
                                    ...field,
                                    email: e.target.value
                                }
                                )

                            }} />
                        </div>
                        <div className='col-span-12'>
                            <label htmlFor="phone" className='block text-gray-600 text-sm font-semibold mb-3'>Phone/Mobile *
                            </label>
                            <input type="tel" required id='phone' name='phone' value={field.phone} className='border-[1px] border-gray-200 rounded-md w-full px-4 py-2 focus:ring-black focus:border-none focus:ring-[1px]' placeholder='Enter your Phone Number' onChange={(e) => {
                                setField({
                                    ...field,
                                    phone: e.target.value
                                }
                                )

                            }} />
                        </div>
                    </div>
                        <div className='col-span-12 mt-4'>
                            <label htmlFor="phone" className='block text-gray-600 text-sm font-semibold mb-3'>Delivery Address *
                            </label>
                            <input type="text" required   className='border-[1px] border-gray-200 rounded-md w-full px-4 py-2 focus:ring-black focus:border-none focus:ring-[1px]' placeholder='Enter your Delivery Address' onChange={(e) => {
                                setField({
                                    ...field,
                                    phone: e.target.value
                                }
                                )

                            }} />
                        </div>
                   
                    <div className="mt-8">
                        <CheckOutTextArea />
                    </div>
                </div>

            </div>
        </div>
       </div>
       <div className="md:col-span-5 ">
       <div className='mt-6 lg:ml-12 '>
       <h1 className='text-2xl font-bold mb-6'>Your Order</h1>

       <div className="mt-3 flex justify-between   items-center font-semibold px-3 bg-gray-300 rounded-md h-12">
         <p>Product</p>
         <p>Subtotal</p>
       </div>

       <div className="mt-3">
         {
           productData.map((Item, index) => (
             <div className='flex justify-between items-center mt-8  border-b border-gray-200'>
               <div className="flex w-[70%] items-center">
                 <div className='w-20 h-17'>
                   <img src={Item.Product.img} alt="" />
                 </div>
                 <p className='lg:ml-4 lg:h-7 lg:w-60 overflow-hidden'>{Item.Product.name}</p>
               </div>

               <div>
                 <p>RS {(Item.Product.price * Item.quantity).toFixed(2)}</p>
               </div>
             </div>
           ))
         }
       </div>


       <div className='mt-6 '>

         <div className='flex items-center border-2 hover:bg-gray-200  border-gray-200 rounded-md py-3' onClick={cash}>
           <input type="radio"
             className='mx-4'
             name='payment'
             value="cash"
             checked={check === "cash"} />
           <p>Cash on Pickup</p>
         </div>
         {
           paymentMethod.map((item) => (
             <div className='mt-4 border-2 border-gray-200 hover:bg-gray-200 flex items-center rounded-md' onClick={() => payment(item.type)}>
               <input type="radio"
                 name='payment'
                 value={item.type}
                 checked={item.type === check}
                 className='mx-4'
               />
               <div className='flex flex-col mx-7  py-3'>
                 <p className='text-lg'>{item.type}</p>
                 <img src={item.url} alt="" className='w-50 h-10' />
               </div>
             </div>

           ))
         }
       </div>

       <div className="mt-4">
         <div className='border-t border-gray-200 flex justify-between border-b py-6'>
           <p className='font-semibold'>Subtotal</p>
           <p className='font-semibold'>RS {totalPrice.toFixed(2)}</p>
         </div>

         <div className='border-b border-gray-200 flex justify-between py-6'>
           <p className='font-semibold'>Shipping</p>
           <p className='font-semibold'>RS {productData.length === 0 ? "0" : shippingFee}</p>
         </div>


         <div className='border-b border-gray-200 flex justify-between py-6'>
           <p className='font-semibold'>Total</p>
           <p className='font-semibold'>RS {(totalPrice + shippingFee).toFixed(2)}</p>
         </div>

       </div>

       <div className='w-full mt-3'>
         <button className='w-full  bg-green-700 text-white py-3 rounded-md font-semibold' onClick={handleOrder}>Place Order</button>
       </div>
     </div>
       </div>
   </div>
    )
}

export default Checkout