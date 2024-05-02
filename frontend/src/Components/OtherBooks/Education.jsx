import React from 'react'
import { useNavigate } from 'react-router-dom';

const Education = () => {
    let books=localStorage.getItem('books')
    let Books=JSON.parse(books)
    let education=Books.filter((book)=>book.subcategory==='Education')
    let navigate=useNavigate()
    const handleBook = (book) => {
        console.log(book);
        navigate(`/book/${book._id}`, {state:book})
    }


  return (
    <div className='px-4 mt-12  pb-12'>
    <div className='border p-5 rounded shadow '>
        <div className="flex items-center justify-between">
            <h1 className='text-2xl font-bold'>Education Books</h1>
            <p  className='text-lg text-gray-500'>{education?.length} books</p>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-10 pb-6">
            {
                education.map((book) => (
                    <div className='bg-gray-200  rounded-lg cursor-pointer' onClick={() => handleBook(book)}>
                    <div className='w-full h-[300px] bg-gray-200 rounded-lg '>
                        <img src={book.img} className='w-full h-full rounded-lg  ' alt="" />
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

export default Education
