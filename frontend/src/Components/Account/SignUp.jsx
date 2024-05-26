import React, { useState } from "react";
import Modal from "react-modal";
import { IoCloseSharp } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OTPInput from "otp-input-react";
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
  const [loginForm, setLoginForm] = useState("block");
  const [otpForm, setotpForm] = useState("hidden");
  const [OTP, setOTP] = useState("");
  const [code, setcode] = useState("");
  const [userData, setUserData] = useState("");

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(regex.test(email));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const min = 1000;
    const max = 9999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setcode(randomNumber.toString());

    if (!name || !email || !password) {
      setError(false);
      return false;
    } else  {
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
          setUserData(result)
            setLoading(true);
            const response = await fetch("https://booksplatform-theta.vercel.app/sendOTP", {
              method: "POST",
              body: JSON.stringify({ randomNumber, result }),
              headers: {
                "Content-Type": "application/json",
              },
            });
            if (response) {
              toast.success("OTP sent Successfully!");
              setLoginForm("hidden");
              setotpForm("block");
            } else {
              toast.error("OTP not sent! Try Again");
            }
          
        } else {
          toast.error("Please try again");
        }
      } finally {
        setLoading(false);
      }
    }
  };

  const verifyAccount = () => {
    if (code === OTP) {
      localStorage.setItem("user", JSON.stringify(userData));
      toast.success("Signup Succesfully!", {
        autoClose: 2000,
      });
      setTimeout(() => {
        setIsOpen(onClose);
      }, [2000]);
    } else {
      toast.error("Invalid OTP!");
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
         <>
          <div className={`py-5 ${loginForm}`}>
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

          <div className={`md:pb-7 pt-5 ${otpForm}`}>
              <h1 className="pt-5 pb-3 text-4xl font-bold font-serif text-center">
              Accout Verification
              </h1>
              <p className="text-center  text-gray-500">
                Please fill in this form to verify your account.
              </p>
              <div className="w-full flex items-center justify-center my-4">
                <OTPInput
                  value={OTP}
                  onChange={setOTP}
                  autoFocus
                  OTPLength={4}
                  otpType="number"
                  disabled={false}
                  inputStyles={{
                    width: "2.5em",
                    border: "2px solid black",
                    margin: "12px",
                    borderRadius: "5px",
                    padding: "4px 2px",
                  }}
                />
              </div>

              <div className="w-full flex items-center justify-center">
                <button
                  className="bg-blue-600 text-white font-semibold block py-2 px-4 mb-5 rounded w-40 hover:bg-purple-700"
                  onClick={verifyAccount}
                >
                  Verify
                </button>
              </div>
            </div>
         </>
        )}
      </Modal>

      <ToastContainer position="top-center" />
    </div>
  );
};

export default SignUp;
