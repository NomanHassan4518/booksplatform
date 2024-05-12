import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const FAQ = () => {
  const [q1, setQ1] = useState('hidden')
  const [q2, setQ2] = useState('hidden')
  const [q3, setQ3] = useState('hidden')
  const [q4, setQ4] = useState('hidden')
  const [q5, setQ5] = useState('hidden')

  const handleAnswer = () => {
    if (q1 === 'hidden') {
      setQ1('block')
    } else {
      setQ1('hidden')
    }
  }

  const handleQ2 = () => {
    if (q2 === 'hidden') {
      setQ2('block')
    } else {
      setQ2('hidden')
    }
  }

  const handleQ3 = () => {
    if (q3 === 'hidden') {
      setQ3('block')
    } else {
      setQ3('hidden')
    }
  }

  const handleQ4 = () => {
    if (q4 === 'hidden') {
      setQ4('block')
    } else {
      setQ4('hidden')
    }
  }

  const handleQ5 = () => {
    if (q5 === 'hidden') {
      setQ5('block')
    } else {
      setQ5('hidden')
    }
  }
  return (
    <>
      <div class=" mb-8">
      <div className='w-full md:h-[13rem] h-[9rem] py-10 md:px-20 px-6  bg-[#122772] text-white  '>
                <h1 className='md:text-7xl text-4xl font-extrabold'>FAQ</h1>
                <p className='md:mt-7 mt-4 text-xl font-semibold'>Frequently Asked Questions</p>
            </div>
        <div className=' text-[#777] text-xl '>
          <div className=' lg:px-20 px-6 py-10 '>
            <p className='text-lg leading-9'>
              Welcome to The Books Platform, your premier online destination for discovering and acquiring the finest literary treasures! At The Books Platform, we curate a vast selection of books spanning every genre imaginable, meticulously handpicked to satisfy the discerning tastes of book enthusiasts worldwide.

              With our user-friendly interface and intuitive search features, finding your next literary adventure has never been easier. Simply peruse our extensive collection, read reviews from fellow readers, and add your favorite titles to your virtual bookshelf.

            </p>
          </div>
        </div>
      </div>

      <div className="my-12 lg:px-20 px-6 text-center">
        
        <div className='pb-5  border-b mb-8'>
          <div className="flex items-center justify-between cursor-pointer" onClick={handleAnswer}>
            <h2 className="text-xl  mb-3">1. How can I place an order?</h2>
            <button  >{q1==='hidden'?<IoIosArrowDown className='w-[25px] h-[25px]'/>:<IoIosArrowUp className='w-[25px] h-[25px]'/>}</button>
          </div>
          <p className={`${q1} mt-2`}>You can place an order by browsing our book collection, adding books to your cart, and proceeding to checkout. Follow the instructions to complete your purchase.</p>
        </div>

        <div className='pb-5  border-b mb-8 cursor-pointer' >
          <div className="flex items-center justify-between" onClick={handleQ2}>
          <h2 className="text-xl  mb-3">2. What payment methods do you accept?</h2>
            <button   >{q2==='hidden'?<IoIosArrowDown className='w-[25px] h-[25px]'/>:<IoIosArrowUp className='w-[25px] h-[25px]'/>}</button>
          </div>
          <p className={`${q2} mt-2`}>We accept various payment methods including credit/debit cards, PayPal, and other secure online payment options. You can choose your preferred method during checkout.</p>
        </div>

        <div className='pb-5 border-b mb-8 cursor-pointer' >
          <div className="flex items-center justify-between" onClick={handleQ3}>
          <h2 className="text-xl  mb-3">3. How can I track my order?</h2>
            <button   >{q3==='hidden'?<IoIosArrowDown className='w-[25px] h-[25px]'/>:<IoIosArrowUp className='w-[25px] h-[25px]'/>}</button>
          </div>
          <p className={`${q3} mt-2`}>Once your order is processed and shipped, you will receive a confirmation email with a tracking number. You can use this tracking number to monitor the status of your delivery.</p>
        </div>

        <div className='pb-5 mb-8 cursor-pointer border-b'>
          <div className="flex items-center justify-between" onClick={handleQ4}>
          <h2 className="text-xl  mb-3">4. What is your return policy?</h2>
            <button   >{q4==='hidden'?<IoIosArrowDown className='w-[25px] h-[25px]'/>:<IoIosArrowUp className='w-[25px] h-[25px]'/>}</button>
          </div>
          <p className={`${q4} mt-2`}>We have a hassle-free return policy. If you are not satisfied with your purchase, you can return the item within 30 days for a full refund or exchange. Please refer to our Returns & Refunds page for more details.</p>
        </div>

        <div className='pb-5 cursor-pointer border-b'>
          <div className="flex items-center justify-between"  onClick={handleQ5}>
          <h2 className="text-xl  mb-3">5. Do you offer international shipping?</h2>
            <button  >{q5==='hidden'?<IoIosArrowDown className='w-[25px] h-[25px]'/>:<IoIosArrowUp className='w-[25px] h-[25px]'/>}</button>
          </div>
          <p className={`${q5} mt-2`}>Yes, we offer international shipping to select countries. Shipping fees and delivery times may vary depending on your location. Please check our Shipping Information page for more details..</p>
        </div>
      </div>
    </>
  )
}

export default FAQ
