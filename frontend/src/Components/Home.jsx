import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import img from '../data/download (2).png'
import HomeTopSlider from './HomeTopSlider';
import BookModel from './BookDetail';

const Home = () => {
    const [modelOpen, setIsOpen] = useState(false);
    const [modelData, setModelData] = useState(null)

    async function fetchData() {
        try {
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1laGJvb2JAdGVzdC5jb20iLCJpZCI6IjY2MDViODBmYzkxMDBjNTc3Yjk0NzE0ZiIsImlhdCI6MTcxMTY1MDgzMX0.cBTQ2u9sR-t9lrFn329BGP_7yZIvReUvh8X_TD7e4cg'; // Replace 'YOUR_JWT_TOKEN' with your actual JWT token
            
            const response = await fetch('https://db-rns85fpkq-nomanhassan4518.vercel.app/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    // Optionally, you can include data to send to the server in the body
                    // For example:
                    name: 'exampleUser',
                    email:"df",
                    password: 'examplePassword'
                })
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            console.log('Data:', data);
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    const handleBook = (book) => {
        setIsOpen(true)
        setModelData(book)
        fetchData();
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
        <div className='w-full border '>
            <div className="px-4">
                <HomeTopSlider />
            </div>

            <div className='md:px-4 px-2 md:mt-12 mt-5 pb-12'>
                <div className='border md:p-5 py-5 px-3 rounded shadow '>
                    <div className="flex items-center justify-between">
                        <h1 className='md:text-2xl text-xl font-bold'>Most Selling</h1>
                        <Link to="/allbooks" className='md:text-lg hover:text-blue-600'>See all books</Link>
                    </div>

                    <div className="grid 2xl:grid-cols-4  lg:grid-cols-2 grid-cols-1 gap-8 mt-10 pb-6">
                        {
                            selling.map((book, index) => (
                                <div  key={book.id} className='md:flex md:items-center md:space-x-5 bg-gray-100 shadow rounded p-4  group cursor-pointer' onClick={() => handleBook(book)}>
                                    <div className='md:w-[250px] md:h-[183px] w-[100%] h-[250px] '>
                                        <img className='w-full h-full md:object-cover object-fill group-hover:scale-105 transition-transform ease-in-out duration-500' src={book.img} alt="" />
                                    </div>
                                    <div>
                                        <p className='md:text-xl font-semibold mt-3 md:mt-0 mb-3 uppercase'>{book.name}</p>
                                        <p className='text-gray-500  '>{book.desc}</p>
                                        <p className="mt-3 text-lg font-semibold">RS {book.price}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='-mt-1 relative h-[25rem] ' style={{ backgroundImage: `url("https://thebooksplatforms.com/wp-content/uploads/2023/08/wp9166934-4k-books-wallpapers-scaled.jpg")`,  width: "100%", backgroundAttachment: "fixed", backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className='md:px-12 px-4 text-white  absolute flex font-serif items-center w-full h-full'>
                    <div className='z-50'>
                        <p className='md:text-3xl text-2xl font-bold'>
                            Limited Time Summer offers</p>
                        <h1 className="md:mt-6 mt-3 md:text-5xl text-3xl font-bold md:leading-[55px]">
                            Special Edition Books <br />
                            at discounted prices
                        </h1>
                        <div className=" md:mt-16 mt-8">

                            <Link className='py-4 px-6 text-black bg-white !mt-5 hover:bg-black hover:text-white font-semibold' to="/allbooks">Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className='absolute top-0 left-0 opacity-75 z-0 bg_overly w-full h-full '>

                </div>
            </div>

            <div className='md:px-5 px-3 py-12 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:space-y-0  gap-10   border-t-2 mt-12 border-black'>
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
