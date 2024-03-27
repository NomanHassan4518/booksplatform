import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import img from '../data/download (2).png'
import HomeTopSlider from './HomeTopSlider';
import BookModel from './BookModel';

const Home = () => {
    const [modelOpen, setIsOpen] = useState(false);
    const [modelData, setModelData] = useState(null)

    const handleBook = (book) => {
        setIsOpen(true)
        setModelData(book)
    }

    const selling = [
        {
            id:1,
            img: "https://thebooksplatforms.com/wp-content/uploads/2023/09/20230925_154640-scaled.jpg",
            name: "Muamalat-E-Rasool SAWW",
            price: "1200.00",
            desc: "Muamalat-E-Rasool SAWW is one of  the  famous book  which is written by Qayyum Nizami."
        },
        {
            id:2,
            img: "https://thebooksplatforms.com/wp-content/uploads/2023/09/20230908_114515-300x300.jpg",
            name: "Haalim",
            price: "2000.00",
            desc: "Haalim is one of the famous novel which is written by Nimra Ahmed."
        },
        {
            id:3,
            img: "https://thebooksplatforms.com/wp-content/uploads/2023/09/20230904_132013-300x300.jpg",
            name: "Peer e Kamil",
            price: "1400.00",
            desc: "Peer e Kamil is one of the  famous novel which is written by Umairah Ahmed."
        },
        {
            id:4,
            img: "https://thebooksplatforms.com/wp-content/uploads/2023/09/20230904_124451-300x300.jpg",
            name: "Jannat ky Pattay",
            price: "2200.00",
            desc: "Jannat ky Pattay is one of the famous novel which is written by Nimra Ahmed."
        },
        {
            id:5,
            img: "https://thebooksplatforms.com/wp-content/uploads/2023/08/aek-general-2-300x300.jpeg",
            name: "Aik General Se Interview",
            price: "800.00",
            desc: "Aik General Se Interview is one of  the  famous book  which is written by Mubeen Ghaznavi."
        },
        {
            id:6,
            img: "https://thebooksplatforms.com/wp-content/uploads/2023/09/20230925_154652-300x300.jpg",
            name: "Muamalat Hazarat Ali",
            price: "700.00",
            desc: "Muamalat Hazarat Ali is one of  the  famous book  which is written by Qayyum Nizami."
        },
    ]


    return (
        <div className='w-full  '>
            <div className="px-4">
                <HomeTopSlider />
            </div>

            <div className='px-4 mt-12  pb-12'>
                <div className='border p-5 rounded shadow '>
                    <div className="flex items-center justify-between">
                        <h1 className='text-2xl font-bold'>Most Selling</h1>
                        <Link to="/allbooks" className='text-lg hover:text-blue-600'>See all books</Link>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-10 pb-6">
                        {
                            selling.map((book, index) => (
                                <div to="/" key={book.id} className='flex items-center space-x-5 bg-[#f9f9f9] shadow rounded p-4  group cursor-pointer' onClick={() => handleBook(book)}>
                                    <div className='w-[250px] h-[183px]'>
                                        <img className='w-full h-full object-cover group-hover:scale-105 transition-transform ease-in-out duration-500' src={book.img} alt="" />
                                    </div>
                                    <div>
                                        <p className='text-xl font-semibold mb-3 uppercase'>{book.name}</p>
                                        <p className='text-gray-500'>{book.desc}</p>
                                        <p className="mt-3 text-lg font-semibold">RS {book.price}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='-mt-1 relative' style={{ backgroundImage: `url("https://thebooksplatforms.com/wp-content/uploads/2023/08/wp9166934-4k-books-wallpapers-scaled.jpg")`, height: "25rem", width: "100%", backgroundAttachment: "fixed", backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className='px-12 text-white  absolute flex font-serif items-center w-full h-full'>
                    <div className='z-50'>
                        <p className='text-3xl font-bold'>
                            Limited Time Summer offers</p>
                        <h1 className="mt-6 text-5xl font-bold leading-[55px]">
                            Special Edition Books <br />
                            at discounted prices
                        </h1>
                        <div className="mt-16">

                            <Link className='py-4 px-6 text-black bg-white !mt-5 hover:bg-black hover:text-white font-semibold' to="/allbooks">Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className='absolute top-0 left-0 opacity-75 z-0 bg_overly w-full h-full '>

                </div>
            </div>

            <div className=' px-5 py-12 grid lg:grid-cols-4 grid-cols-2 lg:space-y-0 space-y-6 gap-5   border-t-2 mt-12 border-black'>
                <div className='  flex items-center justify-center flex-col'>
                    <img className='w-[60px] pb-3' src="https://thebooksplatforms.com/wp-content/uploads/2018/12/globe-free-img.png" alt="" />
                    <p className='text-xl font-semibold'>Shipping arround Pakistan</p>
                </div>
                <div className='  flex items-center justify-center flex-col'>
                    <img className='w-[60px] pb-3' src={img} alt="" />
                    <p className='text-xl font-semibold'>Best Quality</p>
                </div>
                <div className='  flex items-center justify-center flex-col'>
                    <img className='w-[60px] pb-3' src="https://thebooksplatforms.com/wp-content/uploads/2018/12/tag-free-img.png" alt="" />
                    <p className='text-xl font-semibold'>Best Offers</p>
                </div>
                <div className='  flex items-center justify-center flex-col'>
                    <img className='w-[60px] pb-3' src="https://thebooksplatforms.com/wp-content/uploads/2018/12/lock-free-img.png" alt="" />
                    <p className='text-xl font-semibold'>Secure Payments</p>
                </div>

            </div>

            {modelOpen && <BookModel book={modelData} onClose={()=>{setIsOpen(false)}}/>}
        </div>
    )
}

export default Home
