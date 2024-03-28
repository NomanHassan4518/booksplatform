import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const HomeTopSlider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1023, min: 768 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 767, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const autoPlaySpeed = 2000

  const slider = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGgZstTBwtt237yB1cTudAJ6d57mgMjv0qHM-kilSSMYNPIQuI",
      name: "Quran Section"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG2uV-Rnyqo_wNpIYDi9j5qk0H6TzfAoe8CA&usqp=CAU",
      name: "Hadith Section"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKa1yTQh48ZhWOxfAqvTsHVxySMtMAlVMj8w&usqp=CAU",
      name: "History Section"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2Qoc3FaMF_7LSY_UCjwb94ntoUI5vv-XBg&usqp=CAU",
      name: "Iqbal Section"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZS-_OUfT3kfvMEWuHvrVujTb7Yr_zXEklgFXXcteMRXLER6EyWWOlPWMgEWc5S6nnaU&usqp=CAU",
      name: "Novels Section"
    },
  ]
  return (
    <div className='my-12'>
      <Carousel responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={autoPlaySpeed}

      >
        {
          slider.map((item, index) => (
            <Link to="/" key={index} className='bg-gray-100 hover:bg-gray-200  mx-4 ml-6 px-5 py-3 rounded space-x-4 flex items-center'>
              <span className='text-2xl font-bold text-black'>
                <img src={item.img} className='w-[65px] h-[65px] object-cover rounded-full' alt="" />
              </span>
              <span className='text-lg uppercase'>{item.name}</span>
            </Link>
          ))
        }
      </Carousel>
    </div>
  )
}

export default HomeTopSlider
