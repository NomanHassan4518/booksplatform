import React, { useState } from 'react'
import Modal from 'react-modal';
import { IoCloseSharp } from "react-icons/io5";
import { addToCart } from './Redux/Action/Action';
import { useDispatch } from 'react-redux';

const BookModel = ({ book, onClose }) => {
    let [quantity, setQuantity] = useState(1)
    let [modalIsOpen,isOpen] = useState(true)
    let dispatch = useDispatch();
    let bookData = book; 
    console.log(onClose);

    const handleCart = () => {
        let cartData = {
            Product: bookData,
            quantity: quantity
        }
        dispatch(addToCart(cartData))
        isOpen(onClose)
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: "80%",
            zIndex: "1000"
        },
    };
    return (
        <div className=''>
            {modalIsOpen && <button onClick={onClose} className='text-2xl font-bold fixed top-5 rounded-full p-1 right-5 bg-white z-[1000000000000000000000]'><IoCloseSharp /></button>}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={onClose}
                style={customStyles}
                contentLabel="Example Modal"
                overlayClassName="Overlay2 "
            >
                <div className="grid grid-cols-2 gap-5">
                    <div className='w-full h-full'>
                        <img src={bookData.img} className='w-full h-full object-contain rounded' alt="" />
                    </div>

                    <div className='px-4 '>
                        <p className='text-4xl font-bold mb-4 text-green-600'>{bookData.name}</p>
                        <p className='text-xl text-[#bf009e] leading-8'>{bookData.desc} We deal in all kinds of Islamic, Iqbaliyat, and other Urdu reading books. Now you can order Urdu Books from <b>The Books PlatForm</b> and get them delivered to your doorstep all over Pakistan within 3 working days. Order Now.</p>
                        <p className='mt-5 text-2xl font-bold text-blue-600'><span className='text-red-600'>Price:</span> RS {bookData.price}</p>

                        <div className="mt-11">
                            <div className="flex items-center space-x-9">
                                <div className="flex bg-black text-white font-bold text-lg h-10 rounded-md">
                                    <button className='flex justify-center items-center w-16 border-e border-gray-400 cursor-pointer' onClick={() => { setQuantity(quantity - 1) }} disabled={quantity <= 1}>-</button>
                                    <span className='flex justify-center items-center lg:w-32 w-5  '>{quantity}</span>
                                    <button className='flex justify-center  items-center w-16 border-s border-gray-400' onClick={() => { setQuantity(quantity + 1) }}>+</button>
                                </div>

                                <div className='w-full bg-black h-12 flex items-center justify-center rounded text-xl font-bold text-yellow-400 cursor-default'>In Stock</div>
                            </div>

                            <div className='mt-4'>
                                <button className='w-full bg-black rounded h-12 uppercase text-orange-500 font-semibold text-xl' onClick={handleCart}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default BookModel
