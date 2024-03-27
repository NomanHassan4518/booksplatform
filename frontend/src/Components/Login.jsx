import React, { useState } from 'react'
import Modal from 'react-modal';
import { IoCloseSharp } from "react-icons/io5";

const Login = ({onClose}) => {
    const modalIsOpen = true
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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

    const handleLogin=()=>{

    }
    return (
        <div>
            {modalIsOpen && <button onClick={onClose} className='text-2xl font-bold absolute top-5 rounded-full p-1 right-5 bg-white z-[1000000000000000000000]'><IoCloseSharp /></button>}

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={onClose}
                style={customStyles}
                contentLabel="Example Modal"
                overlayClassName="Overlay2 "
            >
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
              </div>
            </Modal>
        </div>
    )
}

export default Login
