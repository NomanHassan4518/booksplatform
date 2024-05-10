import React from 'react'
import { FaFacebook ,FaMobileAlt,FaQuestion  } from "react-icons/fa";
import { MdRoundaboutRight,MdMarkEmailUnread ,MdOutlinePrivacyTip    } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import { LuFileTerminal } from "react-icons/lu";
import { GiReturnArrow } from "react-icons/gi";

const Footer = () => {
    let location=useLocation()
    if(location.pathname==='/checkout' || location.pathname===`/book/${location?.state?._id}`){
        return null
    }
    return (
        <div className=' md:px-12 px-4 pt-10 pb-5 mb-2 border-t-2 border-black mt-6 grid lg:grid-cols-4 lg:gap-4 gap-8 font-serif grid-cols-1 md:grid-cols-2'>
           
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

            <div className='lg:-ml-12 '>
                <h1 className='text-2xl font-bold mb-7'>Contact</h1>
                <h1 className='flex items-center mt-6 space-x-4 text-xl'>
                    <span className='text-3xl text-pink-600'><FaMobileAlt    /></span>
                    <p >+923195586305</p>
                </h1>
                <h1 className='flex items-center mt-6 space-x-4 text-xl'>
                    <span className='text-3xl text-red-600'><MdMarkEmailUnread   /></span>
                    <p >thebooks@gmail.com</p>
                </h1>
                
            </div>
           
           
            
            <div >
                <h1 className='text-2xl font-bold mb-7'>Our Information</h1>
                <h1 className='flex items-center mt-4 space-x-4 text-xl'>
                    <span className='text-3xl text-purple-600'><MdOutlinePrivacyTip   /></span>
                    <Link to="/privacypolicy">Privacy policy</Link>
                </h1>
                <h1 className='flex items-center mt-6 space-x-4 text-xl'>
                    <span className='text-3xl text-lime-600'><LuFileTerminal   /></span>
                    <Link to="/terms&conditions">Terms & conditions</Link>
                </h1>
                <h1 className='flex items-center mt-6 space-x-4 text-xl'>
                    <span className='text-3xl text-orange-600'><GiReturnArrow    /></span>
                    <Link to="/return&refunds">Returns & Refunds Policy</Link>
                </h1>
                <h1 className='flex items-center mt-6 space-x-4 text-xl pb-10 md:pb-0 '>
                    <span className='text-3xl text-red-600  '><FaQuestion     /></span>
                    <Link to="/faq">FAQ & Help</Link>
                </h1>
            </div>
        </div>
    )
}

export default Footer