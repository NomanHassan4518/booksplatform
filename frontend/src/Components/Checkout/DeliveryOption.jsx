import React, { useState } from 'react'
import CheckOutTextArea from './CheckOutTextArea'

const DeliveryOption = () => {



    let formFieldName = {
        firstName: "Noman",
        lastName: "Hassan",
        phone: "+923324424110",
        email: "nh@gmail.com"
    }   


    const [checkRadio, setCheckRedio] = useState("Pickup")
    const [field, setField] = useState(formFieldName)

    const radioButton = (address) => {
        setCheckRedio(address)
    }

    const shippingAddress = ["Pickup", "Delivery"]



    return (
        <div className='md:px-4'>
            <div className='flex flex-col w-full '>
                <h1 className='text-lg font-bold'>Delivery Options</h1>


                {
                    shippingAddress.map((address) => (
                        <div className='border-4 rounded-md hover:bg-gray-100 border-gray-100 mt-3 px-4 py-2 cursor-pointer' onClick={() => radioButton(address)}>
                            <label htmlFor="" className='text-lg'>
                                <input type="radio"
                                    checked={checkRadio === address}
                                    value={address}
                                    className='mx-4 cursor-pointer'

                                />
                                {address}
                            </label>
                        </div>
                    ))
                }


            </div>
            {checkRadio === "Pickup" &&
                <div className='mt-12'>

                    <CheckOutTextArea />

                </div>
            }

            {checkRadio === "Delivery" &&
                <div className='mt-6'>
                    <h1 className='text-2xl font-bold mb-6'>Shipping Address</h1>

                    <div className='grid gap-4 grid-cols-12'>
                        <div className='col-span-6'>
                            <label htmlFor="firstName" className='block text-gray-600 text-sm font-semibold mb-3'>First Name *</label>
                            <input type="text" id='firstName' name='firstName' value={field.firstName} className='border-[1px] border-gray-200 rounded-md w-full py-2 px-4 focus:ring-black focus:border-none focus:ring-[1px]'
                                onChange={(e) => {
                                    setField({
                                        ...field,
                                        firstName: e.target.value
                                    }
                                    )

                                }}

                            />
                        </div>
                        <div className='col-span-6'>
                            <label htmlFor="lastName" className='block text-gray-600 text-sm font-semibold mb-3'>Last Name *</label>
                            <input type="text" id='lastName' name='lastName' value={field.lastName} className='border-[1px] border-gray-200 rounded-md w-full px-4 focus:ring-black focus:border-none focus:ring-[1px]' onChange={(e) => {
                                setField({
                                    ...field,
                                    lastName: e.target.value
                                }
                                )

                            }} />
                        </div>
                        <div className='col-span-6'>
                            <label htmlFor="phone" className='block text-gray-600 text-sm font-semibold mb-3'>Phone/Mobile *
                            </label>
                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required id='phone' name='phone' value={field.phone} className='border-[1px] border-gray-200 rounded-md w-full px-4 focus:ring-black focus:border-none focus:ring-[1px]' onChange={(e) => {
                                setField({
                                    ...field,
                                    phone: e.target.value
                                }
                                )

                            }} />                </div>
                        <div className='col-span-6'>
                            <label htmlFor="email" className='block text-gray-600 text-sm font-semibold mb-3'>Email *</label>
                            <input type="email" id='email' name='email' value={field.email} className='border-[1px] border-gray-200 rounded-md w-full px-4 focus:ring-black focus:border-none focus:ring-[1px]' onChange={(e) => {
                                setField({
                                    ...field,
                                    email: e.target.value
                                }
                                )

                            }} />
                        </div>
                    </div>

                    <div className="mt-12">
                        <CheckOutTextArea />
                    </div>

                    <div className="mt-4">
                        <input type="text" name='address' placeholder='Delivery Address'  className='w-full border-2 rounded border-gray-200 focus:border-gray-950 focus:ring-gray-950'/>
                    </div>
                </div>
            }
        </div>

    )
}

export default DeliveryOption