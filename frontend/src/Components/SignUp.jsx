import React, { useState } from 'react'
import Modal from 'react-modal';
import { IoCloseSharp } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './Spinner';

const appRoot = document.getElementById('root');

// Set the app element for react-modal
Modal.setAppElement(appRoot);

const SignUp = ({ onClose, openModel} ) => {
    let [modalIsOpen, setIsOpen] = useState(openModel.open)
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSignup = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            let result = await fetch("https://booksplatform-theta.vercel.app/signup", {
                method: "POST",
                body: JSON.stringify({ name, email, password }),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            result = await result.json();
            if (result) {
                toast.success("Signup Successfully!", {
                    autoClose: 2000
                });
                localStorage.setItem("user", JSON.stringify({ name, email }))

                setTimeout(() => {
                    setIsOpen(onClose)
                }, [2000])
            }

            else {
                toast.error("Please try again");
            }
        } finally {

        }

    }
    return (
        <div>
            {modalIsOpen && <button onClick={onClose} className='text-2xl font-bold fixed top-5 rounded-full p-1 right-5 bg-white z-[1000000000000000000000]'><IoCloseSharp /></button>}

            <Modal
                isOpen={openModel.open}
                onRequestClose={onClose}
                // style={customStyles}
                contentLabel="Example Modal"
                overlayClassName="Overlay2 "
                className='model'
            >
                {loading ? <Spinner height="h-full" /> :
                    <div >
                        <h1 className='pt-5 pb-3 text-4xl font-bold font-serif text-center'>SignUp Now</h1>
                        <p className='text-center  text-gray-500'>Please fill in this form to signup.</p>
                        <form className='flex items-center flex-col space-y-5 py-5'>
                            <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Enter Your Name' className='border-2 border-black rounded py-1 px-4 md:w-[60%] w-[90%] focus:outline-none bg-gray-200' />
                            <input type='email' value={email} onChange={(e) => {
                                setEmail(e.target.value)
                            }} placeholder='Enter Your Email' className='border-2 border-black rounded py-1 px-4 md:w-[60%] w-[90%] focus:outline-none bg-gray-200' />
                            <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter Your Password' className='border-2 border-black rounded py-1 px-4 md:w-[60%] w-[90%] focus:outline-none bg-gray-200' />
                            <button className='bg-blue-600 text-white font-semibold py-2 px-4 rounded w-40 hover:bg-purple-700' onClick={handleSignup}>SignUp</button>
                        </form>
                        
                    </div>}
            </Modal>

            <ToastContainer position='top-center' />
        </div>
    )
}

export default SignUp
