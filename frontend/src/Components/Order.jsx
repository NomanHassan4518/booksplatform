import axios from "axios";
import React, { useEffect, useState } from "react";

const Order = () => {
  let [orderStatus, setOrderStatus] = useState([]);

  const fetchData = async () => {
    const orders = await axios.get("http://localhost:5000/orderstatus");
    setOrderStatus(orders.data.data);
    console.log(orderStatus);
  };

  useEffect(() => {
    fetchData();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const orderDetele = async (id) => {
    let response = await axios.delete(
      `http://localhost:5000/orderDelete/${id}`
    );
    if (response.data) {
      fetchData();
    }
  };

  return (
    <div className="mt-10 xl:px-16 px-4">
      <h1 className="text-4xl font-semibold mb-6">Order Status:</h1>
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
              {orderStatus.map((book, index) => (
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
                    <span className="bg-green-700 text-white p-3">Status</span>
                    <span
                      className="bg-red-700 text-white p-3"
                      onClick={() => {
                        orderDetele(book._id);
                      }}
                    >
                      Delete
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
