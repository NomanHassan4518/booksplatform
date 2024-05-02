import React from 'react'
import { useNavigate } from 'react-router-dom';

const AllBooks = (props) => {
    let books=props.books
    let navigate=useNavigate()
    const handleBook = (book) => {
        navigate(`/book/${book._id}`, {state:book})
    }


  return (
    <div className='px-4 mt-12  pb-12'>
    <div className='border md:p-5 p-2 rounded shadow '>
        <div className="flex items-center justify-between">
            <h1 className='text-2xl font-bold'>All Books</h1>
            <p  className='text-lg text-gray-500'>{books?.length} books</p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-10 pb-6">
            {
                books.map((book) => (
                <div className='shadow-lg hover:scale-105 duration-500 ease-in-out bg-gray-100 border border-black rounded-lg cursor-pointer' onClick={() => handleBook(book)}>
                    <div className='w-full h-[300px] border-b border-black bg-gray-200 rounded-t-lg '>
                        <img src={book.img} className='w-full h-full rounded-t-lg  ' alt="" />
                    </div>
                    <div className="my-3 px-2">
                        <h1 className='text-xl font-semibold '>{book.name}</h1>
                        <p className='mt-2 h-[45px] overflow-hidden text-gray-500 '>{book.desc}</p>
                        <p className='mt-2 text-lg text-red-600 '>RS {book.price}</p>
                    </div>
                </div>
                ))
            }
        </div>
    </div>
</div>
  )
}

export default AllBooks
