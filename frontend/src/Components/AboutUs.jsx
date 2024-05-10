import React, { useState } from 'react'

const AboutUs = () => {
    const [about, setAbout] = useState('block')
    const [vision, setVision] = useState('hidden')
    return (
        <div >
            <div className='w-full h-[13rem] flex items-center bg-[#122772] text-white justify-center '>
                <h1 className='text-7xl font-extrabold'>The Books Platform</h1>
            </div>

            <div className="mt-12 px-24">
                <div className="flex items-center justify-center space-x-12 pb-6 border-b-2 text-xl">
                    <button className={`${about === 'block' ? 'text-[#091290] after:w-full' : 'text-black'} relative font-semibold after:w-0 after:h-[2px] after:bg-[#ffe600] after:top-[3.2rem] after:absolute after:content-[&quot;&quot;] ease-in-out after:duration-500 after:left-0 `} onClick={() => { setVision('hidden'); setAbout('block') }}>About</button>
                    <button className={`${vision === 'block' ? 'text-[#122772] after:w-full' : 'text-black'} relative font-semibold after:w-0 after:h-[2px] after:bg-[#ffe600] after:top-[3.2rem] after:absolute after:content-[&quot;&quot;] ease-in-out after:duration-500 after:left-0`} onClick={() => { setAbout('hidden'); setVision('block') }}>VISION & MISSION</button>
                </div>

                <div className={`${about} mt-12`}>
                    <p className='text-xl text-[#777] '>At  The Books Platform, we are passionate about literature and dedicated to bringing the joy of reading to book lovers everywhere. As avid readers ourselves, we understand the thrill of discovering new stories, the satisfaction of turning the pages of a well-loved classic, and the transformative power of a great book, accompanied by the enticing scent of fresh pages as you journey through its chapters.</p>

                    <p className='text-xl text-[#777] mt-6'>With a vast inventory curated by our team of literary enthusiasts, we offer something for every reader. From gripping thrillers and heartwarming romance novels to thought-provoking non-fiction and captivating children’s books, our shelves are stocked with treasures waiting to be discovered.</p>

                    <p className='text-xl text-[#777] mt-6'>We believe that knowledge should be accessible to everyone. That’s why we offer a diverse collection of books and educational materials at market-competitive prices. From textbooks and study guides to fiction, non-fiction, and everything in between, we have something for every reader and learner.</p>

                    <p className='text-xl text-[#777] mt-6'>We understand the demands of modern life, especially when it comes to balancing education, work, and personal commitments. That’s why we’ve made it our mission to make accessing books and stationery products as convenient as possible for you.</p>

                    <p className='text-xl text-[#777] mt-6'> The Books Platform supplies books & stationery products delivered to your home while you are busy with your studies. We are one of the largest online bookstores in Pakistan catering to your reading and educational requirements.  The Books Platform is a collection of books you need, books your siblings need; books your children might need delivered to your doorstep at market competitive prices.</p>

                    <p className='text-xl text-[#777] mt-6'>Customer satisfaction is at the heart of everything we do. While you’re browsing our virtual shelves, we are committed to providing you with exceptional service, unparalleled selection, and a memorable shopping experience. Your love for reading drives us to continuously improve and expand our offerings, ensuring that you always find your next literary adventure with us.</p>

                    <p className='text-xl text-[#777] mt-6'>Join us on our journey as we celebrate the written word and connect readers with stories that inspire, entertain, and enlighten. Follow us on social media, sign up for our newsletter and explore our website to discover the latest additions to our catalog.</p>

                    <p className='text-xl text-[#777] mt-6'>Thank you for choosing  The Books Platform as your literary companion. Let’s embark on this adventure together!
                    </p>

                    <p className='text-xl text-[#777] mt-6'>Happy reading!</p>
                </div>

                <div className={`${vision} mt-12`}>
                    <p className='text-xl text-[#777] '>At  The Books Platform, we believe in the power of knowledge. Therefore, our goal is to help those who crave it. We strive to be the go-to destination for readers and learners across Pakistan, envisioning a world where access to quality literature and educational resources is not limited by time, location, or circumstance.</p>

                    <p className='text-xl text-[#777] mt-6'>Our mission is simple: to provide book enthusiasts with access to a diverse and extensive collection of titles, spanning various genres, interests, and cultures. Whether you’re searching for the latest bestsellers, timeless classics, or niche publications, we strive to be your ultimate destination for literary exploration.</p>

                    <p className='text-xl text-[#777] mt-6'>We pride ourselves on more than just our extensive selection. We believe in fostering a community of readers and book lovers, where everyone is welcome to share their passion for literature. Our knowledgeable staff is always on hand to offer personalized recommendations, assist with special orders, and create a warm and inviting atmosphere for book enthusiasts of all ages.</p>

                    <p className='text-xl text-[#777] mt-6'>Our vision is to help the spread of education in Pakistan. We aim to help the cause by donating books where they are needed the most. We can’t achieve this on our own, but together we can make a difference. Please visit our contact us page and help us make a little child’s future bright by donating books you don’t need anymore. We are committed to the cause of literacy. Every person should have the chance to achieve their potential and participate fully in society.</p>

                    <p className='text-xl text-[#777] mt-6'>We’re more than just a business. We equally prioritize our customers, employees, community, planet, and the lives changed by our common cause. Through our business, we strive to empower people to make sustainable positive changes in this world. Thanks to you, we’re well on our way.</p>

                </div>
            </div>
        </div>
    )
}

export default AboutUs
