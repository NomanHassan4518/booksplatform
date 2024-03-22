import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='fixed w-full py-4 px-16 border-b-4 border-red-500 bg-white z-[10000] '>
            <div className='flex justify-between items-center'>
                <div className="flex justify-between items-center space-x-20">
                    <div className='text-center  flex items-center space-x-2 '>
                        <img className='w-[45px] object-cover' src="https://thebooksplatforms.com/wp-content/uploads/2023/09/cropped-888990-100x120.png" alt="" />
                        <h1 className='font-bold text-xl'>The Books <br /> Platform</h1>
                    </div>

                    <div>
                        <ul className='flex items-center space-x-10 text-xl '>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Categories</Link></li>
                            <li><Link to="/">Shop</Link></li>
                            <li><Link to="/">FAQ</Link></li>
                        </ul>
                    </div>
                </div>





                <div className='space-x-8 font-semibold text-xl flex items-center'>
                    <Link to="">Login</Link>
                    <Link to="">Signup</Link>
                    <div>
                        <button class="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform" aria-label="cart-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 20 20" class="md:w-4 xl:w-5 md:h-4 xl:h-5"><path d="M5,4H19a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4ZM2,5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3V19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3Zm10,7C9.239,12,7,9.314,7,6H9c0,2.566,1.669,4,3,4s3-1.434,3-4h2C17,9.314,14.761,12,12,12Z" transform="translate(-2 -2)" fill="currentColor" fill-rule="evenodd"></path></svg>
                            <span class="cart-counter-badge flex items-center justify-center bg-black text-white absolute -top-[15px] -right-[12px] px-2 text-xs py-1 rounded-full font-bold" >0</span>
                            </button>
                            </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
