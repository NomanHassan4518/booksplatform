import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import Spinner from "./Spinner";

const Order = () => {
  let [orderStatus, setOrderStatus] = useState([]);
  let [history, setHistory] = useState([]);
  let [loading, setLoading] = useState(false);
  let auth=localStorage.getItem('user')
  let user=JSON.parse(auth);

  const fetchData = async () => {
    try{
        setLoading(true)
        const orders = await axios.get("https://booksplatform-theta.vercel.app/orderstatus");
    setOrderStatus(orders.data.data);
    } finally{
        setLoading(false)
    }
  };

  const fetchHistoryData = async () => {
    try{
        setLoading(true)
        const orders = await axios.get("https://booksplatform-theta.vercel.app/orderHistory");
    setHistory(orders.data)
    } finally{
        setLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  useEffect(() => {
    fetchHistoryData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let ordered= orderStatus.filter((item)=>(
    item.userID===user._id
  ))

  let orderhistory= history.filter((item)=>(
    item.userID===user._id
  ))


  const orderDetele = async (obj) => {
    let response = await axios.delete(
      `https://booksplatform-theta.vercel.app/orderDelete/${obj.id}`
    );
    if (response.data) {
      fetchData();
      toast.success('Order Deleted Successfully!')
    }
  };

  return (
   <>
    {
        loading?
        <Spinner/>
        :
        <div>
            <div className="mt-10 xl:px-16 px-4 pb-10 border-b">
      <h1 className="text-4xl font-semibold mb-6">Order Status:</h1>
     {
        ordered.length>0?
        <div>
        <div class="overflow-x-auto">
          <table class="min-w-full  border border-gray-400">
            <thead>
              <tr className="bg-green-800 text-white ">
                <th class="px-6 py-3 border-b-2 border-gray-300   text-xs font-semibold  uppercase tracking-wider text-center">
                  Book
                </th>
                <th class="px-6 py-3 border-b-2 border-gray-300  text-xs font-semibold  uppercase tracking-wider text-center">
                  Price
                </th>
                <th class="px-6 py-3 border-b-2 border-gray-300  text-xs font-semibold  uppercase tracking-wider text-center">
                  Quantity
                </th>
                <th class="px-6 py-3 border-b-2 border-gray-300   text-xs font-semibold  uppercase tracking-wider text-center">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {ordered.map((book, index) => (
                <tr key={index}>
                  <td class="px-6 py-4 border h-full  border-gray-200  w-[35%] ">
                    {book.orderedBooks.map((item, index) => (
                      <div className="flex items-center space-x-2">
                        <div className="">
                          <img
                            src={item.Product.img}
                            className={`w-[50px] h-[50px] object-cover ${
                              index > 0 ? "mt-5" : "mt-0"
                            }`}
                            alt=""
                          />
                        </div>

                        <p className={` ${index > 0 ? "mt-5" : "mt-0"}`}>
                          {item.Product.name}
                        </p>
                      </div>
                    ))}
                  </td>

                  <td class="px-6 py-4 border border-gray-200 text-center w-[20%]">
                    {book.orderedBooks.map((item, index) => (
                      <p className={` ${index > 0 ? "mt-5" : "mt-0"}`}>
                        {item.Product.price * item.quantity}
                      </p>
                    ))}
                  </td>

                  <td class="px-6 py-4 border border-gray-200 text-center w-[20%]">
                    {book.orderedBooks.map((item, index) => (
                      <p className={` ${index > 0 ? "mt-5" : "mt-0"}`}>
                        {item.quantity}
                      </p>
                    ))}
                  </td>

                  <td class="px-6 py-4 border border-gray-200 text-center w-[25%]">
                    <button  className="bg-green-700 text-white p-3">{book.status}</button>
                    <button
                      className="bg-red-700 text-white p-3"
                      onClick={() => {
                        orderDetele({id:book._id,status:book.status});
                      }}
                      disabled={book.status==='Processing'|| 'Shipped'|| 'Delivered' }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> :
      <p className="text-xl text-red-600">No Orderd!</p>
     }
    </div>

    <div className="mt-24 xl:px-16 px-4">
      <h1 className="text-4xl font-semibold mb-6">Order History:</h1>
     {orderhistory.length>0?
      <div>
      <div class="overflow-x-auto">
        <table class="min-w-full  border border-gray-400">
          <thead>
            <tr className="bg-green-800 text-white ">
              <th class="px-6 py-3 border-b-2 border-gray-300   text-xs font-semibold  uppercase tracking-wider text-center">
                Book
              </th>
              <th class="px-6 py-3 border-b-2 border-gray-300  text-xs font-semibold  uppercase tracking-wider text-center">
                Price
              </th>
              <th class="px-6 py-3 border-b-2 border-gray-300  text-xs font-semibold  uppercase tracking-wider text-center">
                Quantity
              </th>
              <th class="px-6 py-3 border-b-2 border-gray-300   text-xs font-semibold  uppercase tracking-wider text-center">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {orderhistory.map((book, index) => (
              <tr key={index}>
                <td class="px-6 py-4 border h-full  border-gray-200  w-[35%] ">
                  {book.orderedBooks.map((item, index) => (
                    <div className="flex items-center space-x-2">
                      <div className="">
                        <img
                          src={item.Product.img}
                          className={`w-[50px] h-[50px] object-cover ${
                            index > 0 ? "mt-5" : "mt-0"
                          }`}
                          alt=""
                        />
                      </div>

                      <p className={` ${index > 0 ? "mt-5" : "mt-0"}`}>
                        {item.Product.name}
                      </p>
                    </div>
                  ))}
                </td>

                <td class="px-6 py-4 border border-gray-200 text-center w-[20%]">
                  {book.orderedBooks.map((item, index) => (
                    <p className={` ${index > 0 ? "mt-5" : "mt-0"}`}>
                      {item.Product.price * item.quantity}
                    </p>
                  ))}
                </td>

                <td class="px-6 py-4 border border-gray-200 text-center w-[20%]">
                  {book.orderedBooks.map((item, index) => (
                    <p className={` ${index > 0 ? "mt-5" : "mt-0"}`}>
                      {item.quantity}
                    </p>
                  ))}
                </td>

                <td class="px-6 py-4 border border-gray-200 text-center w-[25%]">
               <p>{book.completedAt}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>:
    <p className="mt-5 text-xl text-red-600">You have not any order History.</p>}
    </div>
        </div>
    }

    <ToastContainer/>
   </>
  );
};

export default Order;
