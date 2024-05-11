import React from 'react'
import {  FaQuestion,FaBookReader  } from "react-icons/fa";
import { MdRoundaboutRight, MdMarkEmailUnread, MdOutlinePrivacyTip } from "react-icons/md";
import { MdWorkHistory,MdOutlineMenuBook,MdPhoneForwarded   } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import { LuFileTerminal } from "react-icons/lu";
import { GiReturnArrow } from "react-icons/gi";
import { SiLotpolishairlines } from "react-icons/si";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {
    let location = useLocation()
    if (location.pathname === '/checkout' || location.pathname === `/book/${location?.state?._id}`) {
        return null
    }
    return (
        <>
        <div className=' md:px-12 px-4 pt-10 pb-5 w-full  border-t-2 border-black mt-6 grid lg:grid-cols-4 lg:gap-4 gap-8 font-serif grid-cols-1 md:grid-cols-2'>

<div>
    <h1 className='text-xl font-bold mb-7 uppercase '>Categories</h1>
    <h1 className='flex items-center mt-4 space-x-4 text-xl'>
        <span className='text-3xl text-blue-600'><MdWorkHistory /></span>
        <Link to="/history" className='hover:text-blue-600'>History</Link>
    </h1>
    <h1 className='flex items-center mt-4 space-x-4 text-xl'>
        <span className='text-3xl text-orange-600'><FaBookReader /></span>
        <Link to="/novels" className='hover:text-blue-600'>Novels</Link>
    </h1>
    <h1 className='flex items-center mt-4 space-x-4 text-xl'>
        <span className='text-3xl text-red-600'><SiLotpolishairlines /></span>
        <Link to="/political" className='hover:text-blue-600'>Political</Link>
    </h1>
    <h1 className='flex items-center mt-4 space-x-4 text-xl'>
        <span className='text-3xl text-green-800'><MdOutlineMenuBook /></span>
        <Link to="/education" className='hover:text-blue-600'>Education</Link>
    </h1>
   

</div>

<div className='lg:-ml-12 '>
    <h1 className='text-2xl font-bold mb-7 uppercase'>About</h1>
    <h1 className='flex items-center mt-4 space-x-4 text-xl hover:text-blue-600'>
        <span className='text-3xl text-red-600 '><MdRoundaboutRight /></span>
        <Link to="/about" >About Us</Link>
    </h1>
    <h1 className='flex items-center mt-4 space-x-4 text-xl hover:text-blue-600'>
        <span className='text-3xl text-purple-600'><MdOutlinePrivacyTip /></span>
        <Link to="/privacypolicy">Privacy policy</Link>
    </h1>
</div>

<div className='lg:-ml-20 '>
    <h1 className='text-2xl font-bold mb-7 uppercase'>Contact</h1>
    <h1 className='flex items-center mt-6 space-x-4 text-xl'>
        <span className='text-3xl text-pink-600'><MdPhoneForwarded  /></span>
        <p >+923195586305</p>
    </h1>
    <h1 className='flex items-center mt-6 space-x-4 text-xl'>
        <span className='text-3xl text-green-900'><FaSquareWhatsapp  /></span>
        <p >+923005274906</p>
    </h1>
    <h1 className='flex items-center mt-6 space-x-4 text-xl'>
        <span className='text-3xl text-red-600'><MdMarkEmailUnread /></span>
        <p >thebooks@gmail.com</p>
    </h1>

</div>

<div >
    <h1 className='text-2xl font-bold mb-7 uppercase'>Our Information</h1>
  
    <h1 className='flex items-center mt-6 space-x-4 text-xl hover:text-blue-600'>
        <span className='text-3xl text-lime-600'><LuFileTerminal /></span>
        <Link to="/terms&conditions">Terms & conditions</Link>
    </h1>
    <h1 className='flex items-center mt-6 space-x-4 text-xl hover:text-blue-600'>
        <span className='text-3xl text-orange-600'><GiReturnArrow /></span>
        <Link to="/return&refunds">Returns & Refunds Policy</Link>
    </h1>
    <h1 className='flex items-center mt-6 space-x-4 text-xl  hover:text-blue-600 '>
        <span className='text-3xl text-red-600  '><FaQuestion /></span>
        <Link to="/faq">FAQ & Help</Link>
    </h1>
</div>


</div>
<div className='w-full md:h-[3rem] h-[4rem] mb-16 md:mb-0 text-center bg-lime-200 font-semibold text-black flex items-center justify-center '>© 2024 The Books Platform. All rights reserved</div>
        </>
    )
}

export default Footer