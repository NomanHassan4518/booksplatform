import React, { useState } from 'react'
import { addToCart } from './Redux/Action/Action';
import { useDispatch,useSelector} from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const BookDetail = () => {
    let [quantity, setQuantity] = useState(1)
    let dispatch = useDispatch();
    let location=useLocation()
    let bookData = location.state; 
    let cartData = useSelector((state) => state.cardData)

    let bookIndex =cartData.findIndex((item=>item.Product._id===bookData._id))
  
    const handleCart = () => {
        let cartItem = {
            Product: bookData,
            quantity: quantity 
        };
        dispatch(addToCart(cartItem));
        toast.success("Book Added to Cart!")
    };

    return (
                <div className="lg:flex  space-x-2 p-5">
                    <div className='lg:w-[70%] border h-[75%]'>
                        <img src={bookData.img} className='w-full lg:h-[500px] object-contain  rounded' alt="" />
                    </div>

                    <div className='lg:px-4 lg:w-[80%] mt-5 lg:mt-0 '>
                        <p className='md:text-4xl text-xl font-bold mb-4 text-green-600'>{bookData.name}</p>
                        <p className='text-xl  leading-8'>{bookData.desc} <br /> We deal in all kinds of Islamic, Iqbaliyat, and other Urdu reading books. Now you can order Urdu Books from <b>The Books PlatForm</b> and get them delivered to your doorstep all over Pakistan within 3 working days. Order Now.</p>
                        <p className='mt-5 text-2xl font-bold text-blue-600'><span className='text-red-600'>Price:</span> RS {bookData.price}</p>

                        <div className="mt-11">
                            <div className="flex items-center lg:space-x-9 space-x-2">
                                <div className="flex bg-black text-white font-bold text-lg h-10 rounded-md">
                                    <button className='flex justify-center items-center w-16 border-e border-gray-400 cursor-pointer' onClick={() => { setQuantity(quantity - 1) }} disabled={quantity <= 1}>-</button>
                                    <span className='flex justify-center items-center lg:w-32 w-10  '>{quantity}</span>
                                    <button className='flex justify-center  items-center w-16 border-s border-gray-400' onClick={() => { setQuantity(quantity + 1) }} disabled={quantity>=bookData.stock  || (cartData.length!==0?quantity===bookData.stock-cartData[bookIndex]?.quantity:null)  }>+</button>
                                </div>

                                <div className='w-full bg-black h-12 flex items-center justify-center rounded text-xl font-bold text-yellow-400 cursor-default'>{bookData.stock>=1 && bookData.stock!==cartData[bookIndex]?.quantity? "Stock In" :"Stock Out"}</div>
                            </div>

                            <div className='mt-4 pb-20 md:pb-0'>
                                <button disabled={bookData.stock<=0 || bookData.stock===cartData[bookIndex]?.quantity || quantity>bookData.stock-cartData[bookIndex]?.quantity } className={`w-full  rounded ${bookData.stock===0 || bookData.stock===cartData[bookIndex]?.quantity || quantity>bookData.stock-cartData[bookIndex]?.quantity?"cursor-not-allowed bg-red-700 text-white ":"cursor-pointer text-orange-500 bg-black"} h-12 uppercase  font-semibold text-xl`} onClick={handleCart}>Add to cart</button>
                            </div>
                        </div>
                    </div>

                    <ToastContainer position='top-center'/>
                </div>
    )
}

export default BookDetail
