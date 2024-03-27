import React , {useState} from 'react'
import BookModel from './BookModel';

const AllBooks = () => {
    const [modelOpen, setIsOpen] = useState(false);
    const [modelData, setModelData] = useState(null)

    const handleBook = (book) => {
        console.log(book , "dasd");
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
    <div className='px-4 mt-12  pb-12'>
    <div className='border p-5 rounded shadow '>
        <div className="flex items-center justify-between">
            <h1 className='text-2xl font-bold'>All Books</h1>
            <p  className='text-lg text-gray-500'>{selling.length} books</p>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-10 pb-6">
            {
                selling.map((book, index) => (
                    <div to="/" key={index} className='flex items-center space-x-5 bg-[#f9f9f9] shadow rounded p-4  group cursor-pointer' onClick={() => handleBook(book)}>
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
    {modelOpen && <BookModel book={modelData} onClose={()=>{setIsOpen(false)}}/>}
</div>
  )
}

export default AllBooks
