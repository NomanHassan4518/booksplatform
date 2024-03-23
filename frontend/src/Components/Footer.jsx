import React from 'react'
import { FaFacebook ,FaMobileAlt,FaQuestion  } from "react-icons/fa";
import { MdRoundaboutRight,MdMarkEmailUnread ,MdOutlinePrivacyTip    } from "react-icons/md";
import { Link } from 'react-router-dom';
import { LuFileTerminal } from "react-icons/lu";
import { GiReturnArrow } from "react-icons/gi";

const Footer = () => {
    return (
        <div className=' px-12 py-20 border-b grid lg:grid-cols-4 gap-4 font-serif grid-cols-1 md:grid-cols-2'>
           
            <div >
                <h1 className='text-2xl font-bold mb-7'>Social</h1>
                <h1 className='flex items-center mt-4 space-x-4 text-xl'>
                    <span className='text-3xl text-blue-600'><FaFacebook /></span>
                    <Link to="/" className='hover:text-blue-600'>FaceBook</Link>
                </h1>
                
            </div>

            <div >
                <h1 className='text-2xl font-bold mb-7'>About</h1>
                <h1 className='flex items-center mt-4 space-x-4 text-xl'>
                    <span className='text-3xl text-red-600'><MdRoundaboutRight  /></span>
                    <Link to="/about">About Us</Link>
                </h1>
            </div>

            <div className='-ml-12 '>
                <h1 className='text-2xl font-bold mb-7'>Contact</h1>
                <h1 className='flex items-center mt-6 space-x-4 text-xl'>
                    <span className='text-3xl text-pink-600'><FaMobileAlt    /></span>
                    <Link to="/about">+923195586305</Link>
                </h1>
                <h1 className='flex items-center mt-6 space-x-4 text-xl'>
                    <span className='text-3xl text-red-600'><MdMarkEmailUnread   /></span>
                    <Link to="/about">thebooksplatform@gmail.com</Link>
                </h1>
                
            </div>
           
           
            
            <div >
                <h1 className='text-2xl font-bold mb-7'>Our Information</h1>
                <h1 className='flex items-center mt-4 space-x-4 text-xl'>
                    <span className='text-3xl text-purple-600'><MdOutlinePrivacyTip   /></span>
                    <Link to="/about">Privacy policy</Link>
                </h1>
                <h1 className='flex items-center mt-6 space-x-4 text-xl'>
                    <span className='text-3xl text-lime-600'><LuFileTerminal   /></span>
                    <Link to="/about">Terms & conditions</Link>
                </h1>
                <h1 className='flex items-center mt-6 space-x-4 text-xl'>
                    <span className='text-3xl text-orange-600'><GiReturnArrow    /></span>
                    <Link to="/about">Returns & Refunds Policy</Link>
                </h1>
                <h1 className='flex items-center mt-6 space-x-4 text-xl'>
                    <span className='text-3xl text-red-600'><FaQuestion     /></span>
                    <Link to="/about">FAQ & Help</Link>
                </h1>
            </div>
        </div>
    )
}

export default Footer