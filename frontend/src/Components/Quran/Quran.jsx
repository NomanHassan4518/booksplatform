import React from 'react'
import { useNavigate } from 'react-router-dom';

const Quran = () => {
    let books=localStorage.getItem('books')
    let Books=JSON.parse(books)
    let quranBooks=Books.filter((book)=>book.category==='Quran Books')
    let navigate=useNavigate()
    const handleBook = (book) => {
        console.log(book);
        navigate(`/book/${book._id}`, {state:book})
    }


  return (
    <div className='px-4 mt-12  pb-12'>
    <div className='border p-5 rounded shadow '>
        <div className="flex items-center justify-between">
            <h1 className='text-2xl font-bold'>Quran Books</h1>
            <p  className='text-lg text-gray-500'>{quranBooks?.length} books</p>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-10 pb-6">
            {
                quranBooks.map((book) => (
                    <div  key={book.id} className='md:flex md:items-center md:space-x-5 bg-gray-100 shadow rounded p-4  group cursor-pointer' onClick={() => handleBook(book)}>
                    <div className='md:w-[250px] md:h-[183px]  w-[100%] h-[250px] '>
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
  )
}

export default Quran
