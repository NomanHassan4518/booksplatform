import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Order = () => {
  let productData = useSelector((state) => state.cardData)
  let totalPrice = useSelector((state) => state.totalPrice)
  const [check, setCheck] = useState("cash")



  let paymentMethod = [
    {
      type: "Stripe",
      url: "https://apna.ignitehq.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcomponents%2Fassets%2FcardImg.7a524e7eee46cdc62481e3df275c3db7.jpg&w=828&q=75"
    },
    {
      type: "Tap",
      url: "https://apna.ignitehq.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcomponents%2Fassets%2FcardImg.7a524e7eee46cdc62481e3df275c3db7.jpg&w=828&q=75"
    }
  ]

  const payment = (item) => {
    setCheck(item)
  }

  const cash = () => {
    setCheck("cash")
  }

 
  let shippingFee = 0
 
  productData.map((item => {
    return shippingFee += item.quantity * 30
  }))

  return (
    <div className='mt-6 lg:ml-12 '>
      <h1 className='text-2xl font-bold mb-6'>Your Order</h1>

      <div className="mt-3 flex justify-between   items-center font-semibold px-3 bg-gray-300 rounded-md h-12">
        <p>Product</p>
        <p>Subtotal</p>
      </div>

      <div className="mt-3">
        {
          productData.map((Item, index) => (
            <div className='flex justify-between items-center mt-8  border-b border-gray-200'>
              <div className="flex w-[70%] items-center">
                <div className='w-20 h-17'>
                  <img src={Item.Product.img} alt="" />
                </div>
                <p className='lg:ml-4 lg:h-7 lg:w-60 overflow-hidden'>{Item.Product.name}</p>
              </div>

              <div>
                <p>RS {(Item.Product.price * Item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))
        }
      </div>
    

      <div className='mt-6 '>

        <div className='flex items-center border-2 hover:bg-gray-200  border-gray-200 rounded-md py-3' onClick={cash}>
          <input type="radio"
            className='mx-4'
            name='payment'
            value="cash"
            checked={check === "cash"} />
          <p>Cash on Pickup</p>
        </div>
        {
          paymentMethod.map((item) => (
            <div className='mt-4 border-2 border-gray-200 hover:bg-gray-200 flex items-center rounded-md' onClick={() => payment(item.type)}>
              <input type="radio"
                name='payment'
                value={item.type}
                checked={item.type === check}
                className='mx-4'
              />
              <div className='flex flex-col mx-7  py-3'>
                <p className='text-lg'>{item.type}</p>
                <img src={item.url} alt="" className='w-50 h-10' />
              </div>
            </div>

          ))
        }
      </div>

      <div className="mt-4">
        <div className='border-t border-gray-200 flex justify-between border-b py-6'>
          <p className='font-semibold'>Subtotal</p>
          <p className='font-semibold'>RS {totalPrice.toFixed(2)}</p>
        </div>

        <div className='border-b border-gray-200 flex justify-between py-6'>
          <p className='font-semibold'>Shipping</p>
          <p className='font-semibold'>RS {productData.length === 0 ? "0" : shippingFee}</p>
        </div>


        <div className='border-b border-gray-200 flex justify-between py-6'>
          <p className='font-semibold'>Total</p>
          <p className='font-semibold'>RS {(totalPrice + shippingFee).toFixed(2)}</p>
        </div>

      </div>

      <div className='w-full mt-3'>
        <button className='w-full  bg-green-700 text-white py-3 rounded-md font-semibold'>Place Order</button>
      </div>

    </div>
  )
}

export default Order