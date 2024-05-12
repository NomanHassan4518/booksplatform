import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import HomeTopSlider from './HomeTopSlider';


const Home = () => {
    let navigate = useNavigate()
    const handleBook = (book) => {
        navigate(`/book/${book._id}`, { state: book })
    }

    let books = localStorage.getItem('books')
    let Books = JSON.parse(books)
    let bookNamesToFilter = ["Muamalat-E-Rasool SAWW", "Chengez Khan", "Global Warming", "God, Science, And Self", "2020: World of War","Kashf Ul Asrar"];
    let topBooks = Books?.filter(book => bookNamesToFilter.includes(book.name));



    return (
        <div className='w-full  '>
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
                            topBooks?.map((book) => (
                                <div key={book.id} className='md:flex md:items-center md:space-x-5 bg-gray-100 boxShadow rounded p-4  group cursor-pointer' onClick={() => handleBook(book)}>
                                    <div className='md:w-[250px] md:h-[183px] w-[100%] h-[250px] '>
                                        <img className='w-full h-full md:object-contain object-fill group-hover:scale-105 transition-transform ease-in-out duration-500' src={book.img} alt="" />
                                    </div>
                                    <div className='w-[70%]'>
                                        <p className='md:text-xl font-semibold mt-3 md:mt-0 mb-3 uppercase'>{book.name}</p>
                                        <p className='text-gray-500 h-[45px] overflow-hidden '>{book.desc}</p>
                                        <p className="mt-3 text-lg font-semibold">RS {book.price}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='-mt-1 relative h-[25rem] ' style={{ backgroundImage: `url("https://thebooksplatforms.com/wp-content/uploads/2023/08/wp9166934-4k-books-wallpapers-scaled.jpg")`, width: "100%", backgroundAttachment: "fixed", backgroundPosition: "center", backgroundSize: "cover" }}>
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

         

        </div>
    )
}

export default Home
