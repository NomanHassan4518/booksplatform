import React, { useState } from 'react'
import Modal from 'react-modal';
import { IoCloseSharp } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './Spinner';
import SignUp from './SignUp';

const appRoot = document.getElementById('root');

// Set the app element for react-modal
Modal.setAppElement(appRoot);

const Login = ({ onClose,openModel }) => {
    const [modalIsOpen, setIsOpen] = useState(true)
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [open, setOpen] = useState(false);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: "50%",
            zIndex: "1000"
        },
    };

    const handleSignUp=()=>{
        setIsOpen(onClose)
        setOpen(true)
        if (open===true) {
            setIsOpen(true)
        }
    }

    

    const handleLogin = async (e) => {
        e.preventDefault()
      try{
        setLoading(true)
        let result = await fetch("https://booksplatform-theta.vercel.app/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        result = await result.json();

        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result));
            toast.success("Login Succesfully!", {
                autoClose: 2000
            })
            setTimeout(() => {
                setIsOpen(onClose)
            }, [2000])
        }  else {
            toast.error("User not found!")
        }
      } finally{
        setLoading(false)
      }
        
    }
    return (
        <div>
            {modalIsOpen && <button onClick={onClose} className='text-2xl font-bold fixed top-5 rounded-full p-1 right-5 bg-white z-[1000000000000000000000]'><IoCloseSharp /></button>}

            <Modal
                isOpen={openModel}
                onRequestClose={onClose}
                style={customStyles}
                contentLabel="Example Modal"
                overlayClassName="Overlay2 "
            >
              {
                loading?<Spinner height="h-full"/>:
                <div >
                <h1 className='pt-5 pb-3 text-4xl font-bold font-serif text-center'>Login Now</h1>
                <p className='text-center  text-gray-500'>Please fill in this form to login.</p>
                <form className='flex items-center flex-col space-y-7 py-5'>

                    <input type='email' value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} placeholder='Enter Your Email' className='border-2 border-black rounded py-1 px-4 w-[60%] focus:outline-none bg-gray-200' />
                    <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter Your Password' className='border-2 border-black rounded py-1 px-4 w-[60%] focus:outline-none bg-gray-200' />
                    <button className='bg-blue-600 text-white font-semibold py-2 px-4 rounded w-40 hover:bg-purple-700' onClick={handleLogin}>Login</button>


                </form>
                <button className='w-full text-center my-3 text-xl' onClick={handleSignUp}>Don’t have an account? <span className='text-blue-600 underline'>Create Account</span></button>
            </div>
              }
            </Modal>
            {open && <SignUp openModel={()=>{setIsOpen(true)}} onClose={()=>{setOpen(false)}}/>}
            <ToastContainer position='top-center' />
        </div>
    )
}

export default Login
