import React, { useState } from 'react'
import CheckOutTextArea from './CheckOutTextArea'

const DeliveryOption = () => {
    let person = localStorage.getItem("user")
    let data = JSON.parse(person)
    let formFieldName = {
        firstName: data.name,
        phone: "",
        email: data.email
    }

    const [field, setField] = useState(formFieldName)

    return (
        <div className='md:px-4'>
            <div className='flex flex-col w-full '>

                <div className='mt-6'>
                    <h1 className='text-2xl font-bold mb-6'>Shipping Address</h1>

                    <div className='grid gap-4 grid-cols-12'>
                        <div className='col-span-6'>
                            <label htmlFor="firstName" className='block text-gray-600 text-sm font-semibold mb-3'>Name *</label>
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
                            <label htmlFor="email" className='block text-gray-600 text-sm font-semibold mb-3'>Email *</label>
                            <input type="email" id='email' name='email' value={field.email} className='border-[1px] border-gray-200 rounded-md w-full px-4 py-2 focus:ring-black focus:border-none focus:ring-[1px]' onChange={(e) => {
                                setField({
                                    ...field,
                                    email: e.target.value
                                }
                                )

                            }} />
                        </div>
                        <div className='col-span-12'>
                            <label htmlFor="phone" className='block text-gray-600 text-sm font-semibold mb-3'>Phone/Mobile *
                            </label>
                            <input type="tel" required id='phone' name='phone' value={field.phone} className='border-[1px] border-gray-200 rounded-md w-full px-4 py-2 focus:ring-black focus:border-none focus:ring-[1px]' placeholder='Enter your Phone Number' onChange={(e) => {
                                setField({
                                    ...field,
                                    phone: e.target.value
                                }
                                )

                            }} />
                        </div>
                    </div>
                        <div className='col-span-12 mt-4'>
                            <label htmlFor="phone" className='block text-gray-600 text-sm font-semibold mb-3'>Delivery Address *
                            </label>
                            <input type="text" required   className='border-[1px] border-gray-200 rounded-md w-full px-4 py-2 focus:ring-black focus:border-none focus:ring-[1px]' placeholder='Enter your Delivery Address' onChange={(e) => {
                                setField({
                                    ...field,
                                    phone: e.target.value
                                }
                                )

                            }} />
                        </div>
                   
                    <div className="mt-8">
                        <CheckOutTextArea />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default DeliveryOption