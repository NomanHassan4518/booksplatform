import React, { useState } from 'react'
import { addToCart } from './Redux/Action/Action';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

const BookDetail = () => {
    let [quantity, setQuantity] = useState(1)
    let dispatch = useDispatch();
    let location=useLocation()
    let bookData = location.state; 
    const handleCart = () => {
        let cartData = {
            Product: bookData,
            quantity: quantity
        }
        dispatch(addToCart(cartData))
    }
    return (
                <div className="lg:flex  space-x-2 p-5">
                    <div className='lg:w-[70%] border h-[75%]'>
                        <img src={bookData.img} className='w-full lg:h-[500px]  rounded' alt="" />
                    </div>

                    <div className='lg:px-4 lg:w-[80%] mt-5 lg:mt-0 '>
                        <p className='text-4xl font-bold mb-4 text-green-600'>{bookData.name}</p>
                        <p className='text-xl  leading-8'>{bookData.desc} We deal in all kinds of Islamic, Iqbaliyat, and other Urdu reading books. Now you can order Urdu Books from <b>The Books PlatForm</b> and get them delivered to your doorstep all over Pakistan within 3 working days. Order Now.</p>
                        <p className='mt-5 text-2xl font-bold text-blue-600'><span className='text-red-600'>Price:</span> RS {bookData.price}</p>

                        <div className="mt-11">
                            <div className="flex items-center lg:space-x-9 space-x-2">
                                <div className="flex bg-black text-white font-bold text-lg h-10 rounded-md">
                                    <button className='flex justify-center items-center w-16 border-e border-gray-400 cursor-pointer' onClick={() => { setQuantity(quantity - 1) }} disabled={quantity <= 1}>-</button>
                                    <span className='flex justify-center items-center lg:w-32 w-10  '>{quantity}</span>
                                    <button className='flex justify-center  items-center w-16 border-s border-gray-400' onClick={() => { setQuantity(quantity + 1) }}>+</button>
                                </div>

                                {bookData.stock>=1? <div className='w-full bg-black h-12 flex items-center justify-center rounded text-xl font-bold text-yellow-400 cursor-default'>In Stock</div> :
                                <div className='w-full bg-black h-12 flex items-center justify-center rounded text-xl font-bold text-yellow-400 cursor-default'>Stock Out</div>}
                            </div>

                            <div className='mt-4'>
                                <button disabled={bookData.stock==="0"} className={`w-full bg-black rounded ${bookData.stock==="0"?"cursor-not-allowed":"cursor-pointer"} h-12 uppercase text-orange-500 font-semibold text-xl`} onClick={handleCart}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default BookDetail
