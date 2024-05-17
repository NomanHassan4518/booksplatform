import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SignUp from './Account/SignUp'
import Login from './Account/Login'
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineClose } from 'react-icons/ai'
import { Drawer } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { removeToCart, increseToQuantity, decreaseToQuantity } from './Redux/Action/Action';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [categoryDrawer, setCategoryDrawer] = useState(false)
    const [openSignup, setopenSignUp] = useState(false) 
    const [openLogin, setOpenLogin] = useState(false)
    const [bubble, setBubble] = useState('hidden')
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let title = "Shopping cart"
    let cartData = useSelector((state) => state.cardData)
    let price = useSelector((state) => state.totalPrice)
    let totalItems = useSelector((state) => state.totalItems)
    let auth = localStorage.getItem("user")

    const remove = (index) => {
        dispatch(removeToCart(index))
    }

    const increaseQuantity = (index) => {
        dispatch(increseToQuantity(index))
    }

    const decreseQuantity = (index) => {
        dispatch(decreaseToQuantity(index))
    }

    const handleSignUpButton = () => {
        setopenSignUp(true)
    }

    const handleLoginbutton = () => {
        setOpenLogin(true)
    }

    const handleCheckOut = () => {
        if (auth) {
            navigate("/checkout")
            setIsOpen(false)
        } else {
            setOpenLogin(true)
        }
    }

    const handleDrawerOpen = () => {
        setIsOpen(true)
    }

    const handleLogOut = () => {
        localStorage.removeItem("user");
        navigate("/")
    }

    const toggleDrawer = () => {
        setIsOpen(false)
    }

    const handleBubble=()=>{
        if(bubble==='hidden'){
            setBubble('block')
        } else{
            setBubble('hidden')
        }
    }
    return (
        <>
            <div className='md:sticky top-0 w-full  xl:px-16 shadow  px-4 bg-white z-[100] '>
                <div className='flex justify-between items-center'>
                    <div className="flex justify-between items-center  xl:space-x-20 lg:space-x-14">
                        <Link to="/" className='text-center  flex items-center space-x-2 py-4'>
                            <img className='w-[45px] object-cover' src="https://thebooksplatforms.com/wp-content/uploads/2023/09/cropped-888990-100x120.png" alt="" />
                            <h1 className='font-bold text-xl  md:w-[7rem] '>The Books Platform</h1>
                        </Link>

                        <div >
                            <ul className='lg:flex hidden items-center xl:space-x-10 md:space-x-10 lg:space-x-4  text-xl '>
                                <li className='relative '><Link to="/" className='text-gray-600 hover:text-black  after:w-0 after:h-[4px] after:bg-black after:top-[2.2rem] after:absolute after:content-[""] ease-in-out after:duration-500 after:left-0 hover:after:w-full '>Home</Link></li>
                                <li className='relative group py-5'><p className='text-gray-600 hover:text-black  after:w-0 after:h-[4px] after:bg-black after:top-[3.5rem] after:absolute after:content-[""] ease-in-out after:duration-500 after:left-0 group-hover:after:w-full cursor-default '>
                                    <div className="flex items-center cursor-pointer">
                                        <span>Categories</span>
                                        <MdKeyboardArrowDown className='text-2xl' />
                                    </div>
                                </p>
                                    <div className='menu shadow-inherit z-50 absolute mt-2 opacity-0 group-hover:opacity-100  invisible group-hover:visible -mx-24'>
                                        <div className=" flex items-center w-[50rem]  !mt-6">
                                            <div className=' w-[40%] h-[23rem] bg-gray-100  px-4 p-6'>
                                                <Link to="/quran" className='text-xl font-semibold mb-2 hover:text-green-600 '>Quran Books</Link>
                                                <div className='flex  flex-col space-y-4 ml-3 mt-4'>
                                                    <Link to="/quranBook" className='text-lg hover:text-blue-600'>Quran Mushaf</Link>
                                                    <Link to="/aboutQuran" className='text-lg hover:text-blue-600'>About Quran</Link>
                                                    <Link to="/quranTranslation" className='text-lg hover:text-blue-600'>Quran Translations</Link>
                                                    <Link to="/qurantafaseer" className='text-lg hover:text-blue-600'>Quran Tafaseer</Link>
                                                </div>

                                            </div>
                                            <div className='w-[40%]  h-[23rem] bg-gray-200  px-4 py-3'>
                                                <div className="mt-4">
                                                    <Link to="/hadith" className='text-xl font-semibold mb-2 hover:text-green-600 '>Hadith Books</Link>
                                                    <div className='flex  flex-col space-y-4 ml-3 mt-4'>
                                                        <Link to="/sahihBukhari" className='text-lg hover:text-blue-600'>Sahih Bukhari</Link>
                                                        <Link to="/sahihMuslim" className='text-lg hover:text-blue-600'>Sahih Muslim</Link>
                                                        <Link to="/sunanAbuDawood" className='text-lg hover:text-blue-600'>Sunan Abu Dawood</Link>
                                                        <Link to="/sunanIbnMajah" className='text-lg hover:text-blue-600'>Sunan Ibn Majah</Link>
                                                        <Link to="/sunanNasai" className='text-lg hover:text-blue-600'>Sunan Nasai</Link>


                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-[40%]  h-[23rem] bg-gray-100  px-4 py-3'>
                                                <div className="mt-4">
                                                    <Link to="/collection" className='text-xl font-semibold mb-2 hover:text-green-600 '>Collections</Link>
                                                    <div className='mt-4'>
                                                        <Link to="/political" className='text-xl  mb-2 hover:text-blue-600 block'>Political</Link>
                                                        <Link to="/history" className='text-xl  mb-2 hover:text-blue-600 block'>History</Link>
                                                        <Link to="/novels" className='text-xl  mb-2 hover:text-blue-600 block'>Novels</Link>
                                                        <Link to="/iqbaliyat" className='text-xl  mb-2 hover:text-blue-600 block'>Iqbaliat</Link>
                                                        <Link to="/biography" className='text-xl  mb-2 hover:text-blue-600 block'>Biography</Link>
                                                        <Link to="/children" className='text-xl  mb-2 hover:text-blue-600 block'>Children Books</Link>
                                                        <Link to="/education" className='text-xl  mb-2 hover:text-blue-600 block'>Education</Link>
                                                        <Link to="/sufism" className='text-xl mb-2 hover:text-blue-600 block'>SUFISM</Link>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                </li>
                                <li className='relative'><Link to="/allbooks" className='text-gray-600 hover:text-black  after:w-0 after:h-[4px] after:bg-black after:top-[2.2rem] after:absolute after:content-[""] ease-in-out after:duration-500 after:left-0 hover:after:w-full'>Shop</Link></li>
                                <li className='relative'><Link to="/faq" className='text-gray-600 hover:text-black  after:w-0 after:h-[4px] after:bg-black after:top-[2.2rem] after:absolute after:content-[""] ease-in-out after:duration-500 after:left-0 hover:after:w-full'>FAQ</Link></li>

                                {/* <li className='relative'><Link to="/addProduct" className='text-gray-600 hover:text-black  after:w-0 after:h-[4px] after:bg-black after:top-[2.2rem] after:absolute after:content-[""] ease-in-out after:duration-500 after:left-0 hover:after:w-full'>Add Product</Link></li> */}
                            </ul>
                        </div>
                    </div>

                    <div className='space-x-8 font-semibold  text-xl  md:flex hidden items-center'>
                        {
                            auth ? <button onClick={handleLogOut}>Logout</button> : <div className="space-x-8 font-semibold text-xl flex items-center">
                                <button onClick={handleLoginbutton}>
                                    Login
                                </button>
                                <button onClick={handleSignUpButton}>
                                    SignUp
                                </button>
                            </div>
                        }
                        <div>
                            <button className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform" aria-label="cart-button" onClick={handleDrawerOpen}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 20 20" className="md:w-4 xl:w-5 md:h-4 xl:h-5"><path d="M5,4H19a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4ZM2,5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3V19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3Zm10,7C9.239,12,7,9.314,7,6H9c0,2.566,1.669,4,3,4s3-1.434,3-4h2C17,9.314,14.761,12,12,12Z" transform="translate(-2 -2)" fill="currentColor" fillRule="evenodd"></path></svg>
                                <span className="cart-counter-badge flex items-center justify-center bg-black text-white absolute -top-[15px] -right-[12px] px-2 text-xs py-1 rounded-full font-bold" >{totalItems}</span>
                            </button>
                        </div>

                        <button className='lg:hidden md:block hidden !pl-6' onClick={()=>{setCategoryDrawer(true)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 25.567 18"><g transform="translate(-776 -462)"><rect id="Rectangle_941" data-name="Rectangle 941" width="12.749" height="2.499" rx="1.25" transform="translate(776 462)" fill="currentColor"></rect><rect id="Rectangle_942" data-name="Rectangle 942" width="25.567" height="2.499" rx="1.25" transform="translate(776 469.75)" fill="currentColor"></rect><rect id="Rectangle_943" data-name="Rectangle 943" width="17.972" height="2.499" rx="1.25" transform="translate(776 477.501)" fill="currentColor"></rect></g></svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className='md:hidden flex items-center justify-between px-8 pb-3 pt-5 w-full  bg-white border-t-2 z-[10000000000] border-pink-700 fixed bottom-0 '>
                <button onClick={() => { setCategoryDrawer(true) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 25.567 18"><g transform="translate(-776 -462)"><rect id="Rectangle_941" data-name="Rectangle 941" width="12.749" height="2.499" rx="1.25" transform="translate(776 462)" fill="currentColor"></rect><rect id="Rectangle_942" data-name="Rectangle 942" width="25.567" height="2.499" rx="1.25" transform="translate(776 469.75)" fill="currentColor"></rect><rect id="Rectangle_943" data-name="Rectangle 943" width="17.972" height="2.499" rx="1.25" transform="translate(776 477.501)" fill="currentColor"></rect></g></svg>
                </button>
                <Link to='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="20px" viewBox="0 0 17.996 20.442"><path d="M48.187,7.823,39.851.182A.7.7,0,0,0,38.9.2L31.03,7.841a.7.7,0,0,0-.211.5V19.311a.694.694,0,0,0,.694.694H37.3A.694.694,0,0,0,38,19.311V14.217h3.242v5.095a.694.694,0,0,0,.694.694h5.789a.694.694,0,0,0,.694-.694V8.335a.7.7,0,0,0-.228-.512ZM47.023,18.617h-4.4V13.522a.694.694,0,0,0-.694-.694H37.3a.694.694,0,0,0-.694.694v5.095H32.2V8.63l7.192-6.98L47.02,8.642v9.975Z" transform="translate(-30.619 0.236)" fill="currentColor" stroke="currentColor" strokeWidth="0.4"></path></svg>
                </Link>
                <button className="flex items-center justify-center  flex-shrink-0 h-auto relative focus:outline-none transform" aria-label="cart-button" onClick={handleDrawerOpen}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 20 20" className="md:w-4 xl:w-5 md:h-4 xl:h-5"><path d="M5,4H19a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4ZM2,5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3V19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3Zm10,7C9.239,12,7,9.314,7,6H9c0,2.566,1.669,4,3,4s3-1.434,3-4h2C17,9.314,14.761,12,12,12Z" transform="translate(-2 -2)" fill="currentColor" fillRule="evenodd"></path></svg>
                    <span className="cart-counter-badge flex items-center justify-center bg-black text-white absolute -top-[15px] -right-[12px] px-2 text-xs py-1 rounded-full font-bold" >{totalItems}</span>
                </button>
                <div >
                   <button className='relative' onClick={handleBubble} disabled={openLogin || openSignup ===true}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="20px" viewBox="0 0 16.577 18.6"><path d="M-7722.37,2933a.63.63,0,0,1-.63-.63c0-4.424,2.837-6.862,7.989-6.862s7.989,2.438,7.989,6.862a.629.629,0,0,1-.63.63Zm.647-1.251h13.428c-.246-3.31-2.5-4.986-6.713-4.986s-6.471,1.673-6.714,4.986Zm2.564-12.518a4.1,4.1,0,0,1,1.172-3,4.1,4.1,0,0,1,2.979-1.229,4.1,4.1,0,0,1,2.979,1.229,4.1,4.1,0,0,1,1.171,3,4.341,4.341,0,0,1-4.149,4.5,4.344,4.344,0,0,1-4.16-4.5Zm1.251,0a3.1,3.1,0,0,0,2.9,3.254,3.094,3.094,0,0,0,2.9-3.253,2.878,2.878,0,0,0-.813-2.109,2.88,2.88,0,0,0-2.085-.872,2.843,2.843,0,0,0-2.1.856,2.841,2.841,0,0,0-.806,2.122Z" transform="translate(7723.3 -2914.703)" fill="currentColor" stroke="currentColor" stroke-width="0.6"></path></svg>

                   <div className={`bg-white font-semibold absolute ${bubble} ${auth?"-top-16":"-top-24 "} px-4 w-[7rem] py-3  rounded -left-16 z-[10000] border shadow `}>
                    {auth?<button onClick={handleLogOut}>LogOut</button> :
                    <div className=' space-y-3'>
                        <button onClick={() => { setopenSignUp(true) }}>Sign Up</button>
                    <button onClick={() => { setOpenLogin(true) }}>Login</button>
                    
                    </div>}
                    
                   </div>
                   </button>
                </div>
            </div>

            {
                openSignup && <SignUp openModel={{ open: true }} onClose={() => { setopenSignUp(false) }} />
            }
            {
                openLogin && <Login openModel={() => { setOpenLogin(true) }} onClose={() => { setOpenLogin(false) }} />
            }

            
            <Drawer
                title={title}
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
            >
                <div className=''>
                    <div className={cartData?.length !== 0 ? "hidden " : "block pb-32"}>
                        <div className='flex flex-col -my-24 md:-my-16 xl:my-0 w-full h-full items-center px-1  pb-5'>
                            <svg width="230" style={{ width: "368px", height: "400px" }} height="309.722" viewBox="0 0 180 309.722"><g id="no_cart_in_bag" data-name="no cart in bag" transform="translate(-988 -7673)"><g id="no_cart" data-name="no cart" transform="translate(988 7673)"><g id="Group_5970" data-name="Group 5970" transform="translate(0 0)"><g id="Group_5967" data-name="Group 5967" transform="translate(17.408 92.119)"><path id="Path_17743" data-name="Path 17743" d="M405.506,794.581l63.621-36.762L418.2,724.274Z" transform="translate(-323.428 -576.978)" fill="#ba8064"></path><path id="Path_17744" data-name="Path 17744" d="M135.711,140.727l32.918-.12,1.287-20.225,79.451,45.843-34.42,1.084v19.165Z" transform="translate(-118.988 -119.373)" fill="#dba480"></path><path id="Path_17745" data-name="Path 17745" d="M314.4,206.341,272,124.761l-2.279,22.008,1.4,59.572Z" transform="translate(-220.537 -122.691)" fill="#460100" opacity="0.1"></path><path id="Path_17746" data-name="Path 17746" d="M141.237,253.056l-10.26-47.388,34.59-.126v37.243Z" transform="translate(-115.402 -183.904)" fill="#995b47"></path><path id="Path_17747" data-name="Path 17747" d="M511.029,445.295l-49.136-22.179L460.8,385.489l1.089-72.515,35.954-1.133Z" transform="translate(-365.33 -264.454)" fill="#a96e56"></path><path id="Path_17748" data-name="Path 17748" d="M148.755,398.756l9.58-70.307,4.9-79.149L81.161,201.911,66.677,351.368Z" transform="translate(-66.677 -181.153)" fill="#dba480"></path><path id="Path_17749" data-name="Path 17749" d="M349.459,429.379c-.415,1.942-2.182,2.6-3.948,1.46a5.753,5.753,0,0,1-2.446-5.572c.414-1.942,2.182-2.6,3.948-1.46A5.753,5.753,0,0,1,349.459,429.379Z" transform="translate(-276.046 -348.874)" fill="#67251d"></path><path id="Path_17750" data-name="Path 17750" d="M209.819,348.753c-.415,1.942-2.182,2.6-3.948,1.46a5.753,5.753,0,0,1-2.446-5.572c.415-1.942,2.182-2.6,3.948-1.46A5.753,5.753,0,0,1,209.819,348.753Z" transform="translate(-170.233 -287.779)" fill="#67251d"></path><g id="Group_5965" data-name="Group 5965" transform="translate(31.503 60.166)" opacity="0.2"><path id="Path_17751" data-name="Path 17751" d="M219.35,441.507a16.861,16.861,0,0,1-8.439-2.272A28.35,28.35,0,0,1,196.858,412l4.383-45.226a2.414,2.414,0,0,1,4.806.467l-4.383,45.226a23.483,23.483,0,0,0,11.608,22.554,12.055,12.055,0,0,0,18.081-9.247l3.819-39.41a2.414,2.414,0,0,1,4.806.467l-3.819,39.41a16.912,16.912,0,0,1-16.809,15.266Z" transform="translate(-196.727 -364.591)" fill="#460100"></path></g><path id="Path_17752" data-name="Path 17752" d="M162.373,116.218,161.06,136.85l-34.59.126,82.078,47.388V164.738l35.954-1.132Zm44.968,47.351v18.7l-76.395-44.106,31.247-.113,1.261-19.819,76.774,44.3Z" transform="translate(-111.986 -116.218)" fill="#fcc89d"></path><g id="Group_5966" data-name="Group 5966" transform="translate(29.24 57.45)"><path id="Path_17753" data-name="Path 17753" d="M210.007,430.3a16.864,16.864,0,0,1-8.438-2.271,28.35,28.35,0,0,1-14.054-27.235l4.383-45.226a2.414,2.414,0,0,1,4.806.467l-4.383,45.226a23.483,23.483,0,0,0,11.608,22.554,12.055,12.055,0,0,0,18.081-9.247l3.819-39.41a2.414,2.414,0,0,1,4.806.467l-3.819,39.41A16.912,16.912,0,0,1,210.007,430.3Z" transform="translate(-187.384 -353.38)" fill="#995b47"></path></g><path id="Path_17754" data-name="Path 17754" d="M405.506,546.991,419.99,488.05V397.534Z" transform="translate(-323.428 -329.388)" fill="#995b47"></path></g><g id="Group_5968" data-name="Group 5968" transform="translate(0 0)"><path id="Path_17755" data-name="Path 17755" d="M394.573,120.6c-.142-.5.244-.855.5-1.088a1.4,1.4,0,0,0,.271-.293,0,0,0,0,0,0,0,1.39,1.39,0,0,0-.384-.107c-.34-.065-.853-.162-1-.665s.244-.855.5-1.088a1.39,1.39,0,0,0,.271-.293,0,0,0,0,0,0,0,1.4,1.4,0,0,0-.384-.107c-.34-.064-.853-.162-1-.664s.244-.855.5-1.088l.009-.008a.9.9,0,0,0,.259-.482.391.391,0,0,1,.276-.292.41.41,0,0,1,.5.316,1.122,1.122,0,0,1-.51,1.046,1.4,1.4,0,0,0-.271.292,0,0,0,0,0,0,0,1.4,1.4,0,0,0,.384.107c.34.065.853.162,1,.665s-.244.855-.5,1.088a1.4,1.4,0,0,0-.271.293,0,0,0,0,0,0,0,1.391,1.391,0,0,0,.384.107c.34.065.853.162,1,.665s-.244.855-.5,1.088a1.257,1.257,0,0,0-.273.3,0,0,0,0,0,0,0,1.641,1.641,0,0,0,.387.1c.331.063.826.157.983.625a.416.416,0,0,1-.21.507.392.392,0,0,1-.456-.109.789.789,0,0,0-.464-.253h0C395.229,121.2,394.716,121.1,394.573,120.6Z" transform="translate(-349.075 -37.518)" fill="#212121" opacity="0.3"></path><path id="Path_17765" data-name="Path 17765" d="M395.468,120.6c.142-.5-.244-.855-.5-1.088a1.4,1.4,0,0,1-.271-.293,0,0,0,0,1,0,0,1.39,1.39,0,0,1,.384-.107c.34-.065.853-.162,1-.665s-.244-.855-.5-1.088a1.389,1.389,0,0,1-.271-.293,0,0,0,0,1,0,0,1.4,1.4,0,0,1,.384-.107c.34-.064.853-.162,1-.664s-.244-.855-.5-1.088l-.009-.008a.9.9,0,0,1-.259-.482.391.391,0,0,0-.276-.292.41.41,0,0,0-.5.316,1.122,1.122,0,0,0,.51,1.046,1.4,1.4,0,0,1,.271.292,0,0,0,0,1,0,0,1.4,1.4,0,0,1-.384.107c-.34.065-.853.162-1,.664s.244.855.5,1.088a1.4,1.4,0,0,1,.271.293,0,0,0,0,1,0,0,1.39,1.39,0,0,1-.384.107c-.34.065-.853.162-1,.665s.244.855.5,1.088a1.257,1.257,0,0,1,.273.3,0,0,0,0,1,0,0,1.641,1.641,0,0,1-.387.1c-.331.063-.826.157-.983.625a.416.416,0,0,0,.21.507.392.392,0,0,0,.456-.109.789.789,0,0,1,.464-.253h0C394.812,121.2,395.326,121.1,395.468,120.6Z" transform="translate(-262.76 -23.736)" fill="#212121" opacity="0.3"></path><path id="Path_17756" data-name="Path 17756" d="M375.447,179.277a2.539,2.539,0,1,1,3.346,1.3A2.542,2.542,0,0,1,375.447,179.277Zm3.737-1.643a1.543,1.543,0,1,0-.791,2.034A1.545,1.545,0,0,0,379.184,177.634Z" transform="translate(-375.232 -52.408)" fill="#212121" opacity="0.3"></path><path id="Path_17764" data-name="Path 17764" d="M375.447,179.277a2.539,2.539,0,1,1,3.346,1.3A2.542,2.542,0,0,1,375.447,179.277Zm3.737-1.643a1.543,1.543,0,1,0-.791,2.034A1.545,1.545,0,0,0,379.184,177.634Z" transform="translate(-333.888 -175.716)" fill="#212121" opacity="0.3"></path><path id="Path_17757" data-name="Path 17757" d="M350.086,264.8a1.852,1.852,0,0,1-2.682-2.547l-.868-.823a3.047,3.047,0,0,0,4.417,4.194Z" transform="translate(-253.642 -206.302)" fill="#212121" opacity="0.3"></path><path id="Path_17766" data-name="Path 17766" d="M346.628,264.8a1.852,1.852,0,0,0,2.682-2.547l.867-.823a3.047,3.047,0,0,1-4.417,4.194Z" transform="translate(-170.953 -110.557)" fill="#212121" opacity="0.15"></path><path id="Union_11" data-name="Union 11" d="M2.059,6.97l.989-3.048L0,2.933.283,2.06l3.049.989L4.321,0,5.2.284l-.99,3.048,3.047.989L6.97,5.2l-3.048-.99-.99,3.049Z" transform="translate(6.528 48.598)" fill="#212121" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" strokeWidth="1" opacity="0.3"></path><path id="Union_13" data-name="Union 13" d="M2.059,6.97l.989-3.048L0,2.933.283,2.06l3.049.989L4.321,0,5.2.284l-.99,3.048,3.047.989L6.97,5.2l-3.048-.99-.99,3.049Z" transform="translate(94.294 121.132)" fill="#212121" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" strokeWidth="1" opacity="0.3"></path><path id="Union_12" data-name="Union 12" d="M1.235,4.182l.593-1.829L0,1.759l.17-.524L2,1.829,2.592,0l.525.17L2.523,2l1.828.594-.17.523L2.353,2.523,1.759,4.352Z" transform="translate(107.351 6.528)" fill="#212121" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" strokeWidth="1" opacity="0.3"></path></g></g></g></g></svg>
                            <h3 className='text-lg pt-5 font-bold'>Your cart is empty.</h3>
                        </div>
                    </div>

                    <div className={`${cartData.length === 0 ? "hidden " : "block pb-24"}`}>
                        {
                            cartData.map((item, index) => (
                                <div key={index} className={`w-full ${index === 0 ? "mt-0" : "mt-4"} shadow py-4 flex items-center group justify-around border ${index===cartData.length-1?"mb-12 md:mb-0":""}`}>

                                    <div className=' cursor-pointer relative'>
                                        <img src={item.Product?.img} alt="" className='p-[6px] h-28' />
                                        <div className='absolute top-0 bg-black bg-opacity-30 box-border h-full w-full lg:scale-0 lg:group-hover:scale-90 scale-90  flex items-center justify-center text-w transition-all  duration-500   ease-in-out rounded-lg' onClick={() => { remove(index) }}>
                                            <AiOutlineClose className='text-black bg-white rounded-full text-[25px]' />
                                        </div>
                                    </div>

                                    <div className=' mt-0'>
                                        <p className='h-[20px] overflow-hidden'>{item.Product?.name} </p>
                                        <p className='mt-1 text-gray-400'>Unit Price: RS {item.Product?.price}</p>

                                        <div className="flex justify-between w-full items-center mt-5">
                                            <div className="flex bg-black text-white font-bold text-lg  h-10 rounded-md">
                                                <button className='flex justify-center items-center w-8 lg:w-10 border-e border-gray-400 cursor-pointer' onClick={() => { decreseQuantity(index) }}>-</button>

                                                <button className='w-11'> {item.quantity}</button>

                                                <button className='flex justify-center items-center w-8 lg:w-10 border-s border-gray-400 cursor-pointer' disabled={item.quantity >= item.Product?.stock} onClick={() => { increaseQuantity(index) }}>+</button>
                                            </div>

                                            <div className='h-10 flex justify-center items-center mx-4'>
                                                <p className='font-bold text-md'>RS : {(item.Product.price * item.quantity).toFixed(2)}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                    </div>


                    <div className='absolute left-0 -bottom-4 w-full h-24 bg-white'>


                        <div class="flex flex-col px-5 md:px-7 pt-2 pb-5 md:pb-7 -mt-12 md:mt-0">
                            <button disabled={cartData.length === 0} onClick={handleCheckOut}>
                                <p className={`w-full px-5 py-3 md:py-4 flex items-center justify-center  rounded-md text-sm sm:text-base text-white focus:outline-none transition duration-300 bg-black hover:bg-gray-600  ${cartData.length === 0 ? "cursor-not-allowed " : "cursor-pointer"}`} >
                                    <span class="w-full pe-5 -mt-0.5 py-0.5">Proceed To Checkout</span>
                                    <span className="ms-auto flex-shrink-0 -mt-0.5 py-0.5">
                                        <span className="border-s border-white pe-5 py-0.5">
                                        </span>{cartData.length === 0 ? "RS 0.00" : `RS ${price.toFixed(2)}`}</span>
                                </p>
                            </button>
                        </div>

                    </div>
                </div>
            </Drawer>

            <Drawer
                title='Categories'
                open={categoryDrawer}
                onClose={() => { setCategoryDrawer(false) }}
                direction='left'
                className='bla bla bla'
            >
                <div className="">
                    <div className='h-[19rem] bg-gray-100  p-6'>
                        <Link to="/quran" className='text-xl font-semibold mb-2 hover:text-green-600 ' onClick={()=>{setCategoryDrawer(false)}}>Quran Books</Link>
                        <div className='flex  flex-col space-y-4 ml-3 mt-4'>
                            <Link to="/quranBook" className='text-lg hover:text-blue-600' onClick={()=>{setCategoryDrawer(false)}}>Quran Mushaf</Link>
                            <Link to="/aboutQuran" className='text-lg hover:text-blue-600' onClick={()=>{setCategoryDrawer(false)}}>About Quran</Link>
                            <Link to="/quranTranslation" className='text-lg hover:text-blue-600' onClick={()=>{setCategoryDrawer(false)}}>Quran Translations</Link>
                            <Link to="/qurantafaseer" className='text-lg hover:text-blue-600' onClick={()=>{setCategoryDrawer(false)}}>Quran Tafaseer</Link>
                        </div>

                    </div>
                    <div className='  h-[20rem] bg-gray-200  p-6'>
                        <div className="mt-4">
                            <Link to="/hadith" className='text-xl font-semibold mb-2 hover:text-green-600 ' onClick={()=>{setCategoryDrawer(false)}}>Hadith Books</Link>
                            <div className='flex  flex-col space-y-4 ml-3 mt-4'>
                                <Link to="/sahihBukhari" className='text-lg hover:text-blue-600' onClick={()=>{setCategoryDrawer(false)}}>Sahih Bukhari</Link>
                                <Link to="/sahihMuslim" className='text-lg hover:text-blue-600' onClick={()=>{setCategoryDrawer(false)}}>Sahih Muslim</Link>
                                <Link to="/sunanAbuDawood" className='text-lg hover:text-blue-600' onClick={()=>{setCategoryDrawer(false)}}>Sunan Abu Dawood</Link>
                                <Link to="/sunanIbnMajah" className='text-lg hover:text-blue-600' onClick={()=>{setCategoryDrawer(false)}}>Sunan Ibn Majah</Link>
                                <Link to="/sunanNasai" className='text-lg hover:text-blue-600' onClick={()=>{setCategoryDrawer(false)}}>Sunan Nasai</Link>


                            </div>
                        </div>
                    </div>
                    <div className=' h-[29rem] md:h-[23rem] bg-gray-100  p-6 '>
                        <div className="mt-4">
                            <Link to="/collection" className='text-xl font-semibold mb-2 hover:text-green-600 ' onClick={()=>{setCategoryDrawer(false)}}>Collections</Link>
                            <div className='mt-4'>
                                <Link to="/political" className='text-xl  mb-2 hover:text-blue-600 block' onClick={()=>{setCategoryDrawer(false)}}>Political</Link>
                                <Link to="/history" className='text-xl  mb-2 hover:text-blue-600 block' onClick={()=>{setCategoryDrawer(false)}}>History</Link>
                                <Link to="/novels" className='text-xl  mb-2 hover:text-blue-600 block' onClick={()=>{setCategoryDrawer(false)}}>Novels</Link>
                                <Link to="/iqbaliyat" className='text-xl  mb-2 hover:text-blue-600 block' onClick={()=>{setCategoryDrawer(false)}}>Iqbaliat</Link>
                                <Link to="/biography" className='text-xl  mb-2 hover:text-blue-600 block' onClick={()=>{setCategoryDrawer(false)}}>Biography</Link>
                                <Link to="/children" className='text-xl  mb-2 hover:text-blue-600 block' onClick={()=>{setCategoryDrawer(false)}}>Children Books</Link>
                                <Link to="/education" className='text-xl  mb-2 hover:text-blue-600 block' onClick={()=>{setCategoryDrawer(false)}}>Education</Link>
                                <Link to="/sufism" className='text-xl mb-2 hover:text-blue-600 block' onClick={()=>{setCategoryDrawer(false)}}>SUFISM</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Drawer>
        </>
    )
}

export default Navbar
