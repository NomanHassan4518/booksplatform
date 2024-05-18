import React, { useState } from "react";
import Modal from "react-modal";
import { IoCloseSharp } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../Spinner";

const appRoot = document.getElementById("root");

// Set the app element for react-modal
Modal.setAppElement(appRoot);

const SignUp = ({ onClose, openModel }) => {
  let [modalIsOpen, setIsOpen] = useState(openModel.open);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState(true);

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(regex.test(email));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError(false);
      return false;
    } else if (isValid && !error) {
      try {
        setLoading(true);
        let result = await fetch(
          "https://booksplatform-theta.vercel.app/signup",
          {
            method: "POST",
            body: JSON.stringify({ name, email, password }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        result = await result.json();
        if (result) {
          toast.success("Signup Successfully!", {
            autoClose: 2000,
          });
          localStorage.setItem("user", JSON.stringify({ name, email }));

          setTimeout(() => {
            setIsOpen(onClose);
          }, [2000]);
        } else {
          toast.error("Please try again");
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
          className="text-2xl font-bold fixed lg:top-5 top-2 rounded-full p-1 lg:right-5 right-2 bg-white z-[1000000000000000000000]"
        >
          <IoCloseSharp />
        </button>
      )}

      <Modal
        isOpen={openModel.open}
        onRequestClose={onClose}
        // style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="Overlay2 "
        className="model"
      >
        {loading ? (
          <Spinner height="h-full" />
        ) : (
          <div className="py-5">
            <h1 className="pt-5 pb-3 text-4xl font-bold font-serif text-center">
              SignUp Now
            </h1>
            <p className="text-center  text-gray-500">
              Please fill in this form to signup.
            </p>
            <form className="flex items-center flex-col space-y-8 py-5">
              <div className="md:w-[70%] w-[90%]">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Enter Your Name"
                  className="border-2 border-black rounded py-2 px-4 w-full focus:outline-none bg-gray-100"
                />
                {!name && !error && (
                  <p className="text-red-500">Enter Valid Name</p>
                )}
              </div>

              <div className="md:w-[70%] w-[90%]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    const enteredEmail = e.target.value;
                    setEmail(enteredEmail);
                    // Perform validation
                    if (!isValid) {
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
                onClick={handleSignup}
              >
                SignUp
              </button>
            </form>
          </div>
        )}
      </Modal>

      <ToastContainer position="top-center" />
    </div>
  );
};

export default SignUp;
