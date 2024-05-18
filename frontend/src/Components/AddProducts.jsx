import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "./Spinner";

const AddProducts = () => {
  let [name, setName] = useState("");
  let [img, setImg] = useState("");
  let [price, setPrice] = useState("");
  let [category, setCategory] = useState("");
  let [subcategory, setSuCategory] = useState("");
  let [desc, setDesc] = useState("");
  let [stock, setStock] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let result = await fetch(
        "https://booksplatform-theta.vercel.app/addproduct",
        {
          method: "POST",
          body: JSON.stringify({
            name,
            img,
            price,
            category,
            subcategory,
            desc,
            stock,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(result);

      if (result) {
        toast.success("Add Book Successfully!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full flex items-center justify-center py-20">
          <div className="border w-[60%] p-14 space-y-4">
            <input
              type="text"
              className="border rounded p-3 focus:outline-none block w-full "
              placeholder="Enter Image Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              className="border rounded p-3 focus:outline-none block w-full "
              placeholder="Enter Image URL"
              value={img}
              onChange={(e) => {
                setImg(e.target.value);
              }}
            />
            <input
              type="text"
              className="border rounded p-3 focus:outline-none block w-full "
              placeholder="Enter Image Price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <input
              type="text"
              className="border rounded p-3 focus:outline-none block w-full "
              placeholder="Enter Image Category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <input
              type="text"
              className="border rounded p-3 focus:outline-none block w-full "
              placeholder="Enter Image SubCategory"
              value={subcategory}
              onChange={(e) => {
                setSuCategory(e.target.value);
              }}
            />
            <input
              type="text"
              className="border rounded p-3 focus:outline-none block w-full "
              placeholder="Enter Image Description"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
            <input
              type="number"
              className="border rounded p-3 focus:outline-none block w-full "
              placeholder="Enter Image Stock"
              value={stock}
              onChange={(e) => {
                setStock(e.target.value);
              }}
            />

            <button
              onClick={submit}
              className="w-96 p-3 bg-blue-500 text-white mt-7 "
            >
              Sumbit
            </button>
          </div>
          <ToastContainer position="top-right" />
        </div>
      )}
    </>
  );
};

export default AddProducts;
