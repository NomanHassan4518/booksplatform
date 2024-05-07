import React from 'react'
import { useNavigate } from 'react-router-dom';

const Hadith = () => {
  let books=localStorage.getItem('books')
  let Books=JSON.parse(books)
  let hadith=Books?.filter((book)=>book.category==='Hadith')
  let navigate=useNavigate()

  const handleBook = (book) => {
      console.log(book);
      navigate(`/book/${book._id}`, {state:book})
  }
  return (
    <div className='md:px-4 px-2 md:mt-12  mt-4 pb-12'>
    <div className='border md:p-5 p-2 rounded shadow '>
        <div className="flex items-center justify-between p-3">
            <h1 className='text-2xl font-bold uppercase '>Hadith Books</h1>
            <p className='text-lg text-gray-500'>{hadith?.length} books</p>
        </div>

        <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-12 gap-10  mt-3 pb-6">
            {
                hadith?.map((book) => (
                    <div className='shadow-lg border border-gray-700 lg:hover:scale-105 duration-500 ease-in-out bg-gray-200  rounded-lg cursor-pointer' onClick={() => handleBook(book)}>
                        <div className='w-full 2xl:h-[430px] h-[250px] border-b border-black bg-white  rounded-t-lg '>
                            <img src={book.img} className='w-full h-full rounded-t-lg object-contain ' alt="" />
                        </div> 
                        <div className="my-3 2xl:mt-6 px-2">
                            <h1 className='2xl:text-3xl text-xl font-semibold  overflow-hidden  '>{book.name}</h1>
                            <p className='mt-2 2xl:mt-4 2xl:text-xl 2xl:h-[55px] h-[45px] overflow-hidden text-gray-600 '>{book.desc}</p>
                            <p className='mt-2 2xl:text-2xl text-lg text-red-600 '>RS {book.price}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
</div>
  )
}

export default Hadith
