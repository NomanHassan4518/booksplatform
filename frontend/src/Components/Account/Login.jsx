import React, { useState } from "react";
import Modal from "react-modal";
import { IoCloseSharp } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../Spinner";

const appRoot = document.getElementById("root");

// Set the app element for react-modal
Modal.setAppElement(appRoot);

const Login = ({ onClose, openModel }) => {
  const [modalIsOpen, setIsOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState(true);

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(regex.test(email));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if ( !email || !password) {
        setError(false);
        return false;
      } else if (isValid && !error) {
      try {
        setLoading(true);
        let result = await fetch(
          "https://booksplatform-theta.vercel.app/login",
          {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        result = await result.json();

        if (result.name) {
          localStorage.setItem("user", JSON.stringify(result));
          toast.success("Login Succesfully!", {
            autoClose: 2000,
          });
          setTimeout(() => {
            setIsOpen(onClose);
          }, [2000]);
        } else {
          toast.error("User not found!");
        }
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <div>
      {modalIsOpen && (
        <button
          onClick={onClose}
          className="text-2xl font-bold fixed top-5 rounded-full p-1 right-5 bg-white z-[1000000000000000000000]"
        >
          <IoCloseSharp />
        </button>
      )}

      <Modal
        isOpen={openModel}
        onRequestClose={onClose}
        // style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="Overlay2 "
        className="model"
      >
        {loading ? (
          <Spinner height="h-full" />
        ) : (
          <div className="md:pb-7 pt-5">
            <h1 className="pt-5 pb-3 text-4xl font-bold font-serif text-center">
              Login Now
            </h1>
            <p className="text-center  text-gray-500">
              Please fill in this form to login.
            </p>
            <form className="flex items-center flex-col space-y-7 py-5">
            <div className="md:w-[70%] w-[90%]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    const enteredEmail = e.target.value;
                    setEmail(enteredEmail);
                    // Perform validation
                    if(!isValid){
                        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    setIsValid(regex.test(enteredEmail));
                    }
                  }}
                  onBlur={validateEmail}
                  placeholder="Enter Your Email"
                  className="border-2 border-black rounded py-2 px-4 w-full  focus:outline-none bg-gray-100"
                />
                {(!isValid || (!email && !error)) && (
                  <p className=" text-red-500">
                    Please enter a valid email address.
                  </p>
                )}
              </div>

              <div className="md:w-[70%] w-[90%]">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Enter Your Password"
                  className="border-2 border-black rounded py-2 px-4 w-full  focus:outline-none bg-gray-100"
                />
                {!password && !error && (
                  <p className="text-red-500">Enter Valid Password</p>
                )}
              </div>
              
              <button
                className="bg-blue-600 text-white font-semibold py-2 px-4 rounded w-40 hover:bg-purple-700"
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
          </div>
        )}
      </Modal>

      <ToastContainer position="top-center" />
    </div>
  );
};

export default Login;
