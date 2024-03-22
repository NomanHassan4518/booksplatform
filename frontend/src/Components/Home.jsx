import React from 'react'
import { Link } from 'react-router-dom'
import img from '../data/download (2).png'

const Home = () => {
    const selling = [
        {
            img: "https://thebooksplatforms.com/wp-content/uploads/2023/09/20230925_154640-scaled.jpg",
            name: "Muamalat-E-Rasool SAWW",
            price: "1200.00",
            desc: "Muamalat-E-Rasool SAWW is one of  the  famous book  which is written by Qayyum Nizami."
        },
        {
            img: "https://thebooksplatforms.com/wp-content/uploads/2023/09/Hazrat-Awaiz-Qarni-fotor-20230826124227-300x300.png",
            name: "Hazrat Owais Karni",
            price: "600.00",
            desc: "Hazrat Owais Karni is one of  the  famous book  which is written by Masaood Mufti."
        },
        {
            img: "https://thebooksplatforms.com/wp-content/uploads/2023/09/Ibadet-fotor-20230826125925-300x300.jpg",
            name: "Ibaadat",
            price: "600.00",
            desc: "Ibaadat is one of  the  famous book  which is written by Nushad Adil."
        },
        {
            img: "https://thebooksplatforms.com/wp-content/uploads/2023/09/20230904_124451-300x300.jpg",
            name: "Jannat ky Pattay",
            price: "2,200.00",
            desc: "Jannat ky Pattay is one of  the  famous book  which is written by Nimra Ahmed."
        },
        {
            img: "https://thebooksplatforms.com/wp-content/uploads/2023/08/aek-general-2-300x300.jpeg",
            name: "Aik General Se Interview",
            price: "800,00",
            desc: "Aik General Se Interview is one of  the  famous book  which is written by Mubeen Ghaznavi."
        },
        {
            img: "https://thebooksplatforms.com/wp-content/uploads/2023/12/1000062225.jpg",
            name: "Ali Sher Khan Anchan",
            price: "700.00",
            desc: "Ali Sher Khan Anchanis one of  the  famous book  which is written by M Qasim Nasim."
        },
    ]
    return (
        <div className='w-full pt-24 '>
            <div className='-mt-1 relative ' style={{ backgroundImage: `url("https://thebooksplatforms.com/wp-content/uploads/2023/08/wp9166934-4k-books-wallpapers-scaled.jpg")`, height: "35rem", width: "100%", backgroundAttachment: "fixed", backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className='px-12 text-white z-[1000] absolute flex font-serif items-center w-full h-full'>
                    <div>
                        <p className='text-3xl font-bold'>
                            Limited Time Summer offers</p>
                        <h1 className="mt-6 text-5xl font-bold leading-[55px]">
                            Special Edition Books <br />
                            at discounted prices
                        </h1>
                        <div className="mt-16">

                            <Link className='py-4 px-6 text-black bg-white !mt-5 hover:bg-black hover:text-white font-semibold' to="/">Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className='absolute top-0 left-0 opacity-75 z-0 bg_overly w-full h-full '></div>
            </div>

            <div className=' px-9 mt-20 border-b-2 border-black pb-12'>
                <div className='border p-5 rounded shadow '>
                    <div className="flex items-center justify-between">
                        <h1 className='text-2xl font-bold'>MOST SELLING</h1>
                        <Link to="/" className='text-lg hover:text-blue-600'>See all books</Link>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mt-10 pb-6">
                        {
                            selling.map((book, index) => (
                                <Link to="/" key={index} className='flex items-center space-x-5 bg-gray-50 shadow rounded p-4 hover:-translate-y-1 duration-500'>
                                    <div className='w-[250px] h-[183px]'>
                                        <img className='w-full h-full object-cover' src={book.img} alt="" />
                                    </div>
                                    <div>
                                        <p className='text-xl font-semibold mb-3 uppercase'>{book.name}</p>
                                        <p className='text-gray-500'>{book.desc}</p>
                                        <p className="mt-3 text-lg font-semibold">RS {book.price}</p>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className=' p-20 grid grid-cols-4 gap-5  border-b-2 border-black'>
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
        </div>
    )
}

export default Home
