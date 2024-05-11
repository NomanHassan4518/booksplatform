import React from 'react'

const Return = () => {
    return (
        <div className='lg:p-20 py-20 px-6 '>
            <div>
                <h1 className='lg::text-7xl md:text-6xl text-3xl relative after:absolute after:left-[39%] after:right-[50%] lg::after:top-[7rem] md:after:top-[8.5rem] after:top-[4.9rem]  font-extrabold text-center after:w-[20%] after:h-[4px] after:bg-[#ffe600] '>Reuturn & Refund Policy</h1>
            </div>

            <div className="md:mt-32 mt-20  text-[#777] ">
                <p className='text-lg'>Greetings! Thank you for choosing us for your purchase. Your satisfaction is our priority and we hope you are happy with your purchase. We take strict measures to ensure that customers get what they ordered. However, if you are not satisfied with your purchase, you may return it to us for an exchange or a refund via store credits/voucher.</p>

                <div className="mt-10 text-lg">
                    <h1 className='text-xl font-semibold text-black'>RETURNS</h1>
                    <p className="mt-5">
                        You can initiate a return process by contacting us at 03195586305 or via email at thebooks@gmail.com.
                        To return an item, place the item securely in its original packaging. After receiving your returned items and inspecting the condition of your returned items, we will process your return request as per our Exchange & Refund Policy.
                    </p>
                </div>

                <div className="mt-10 text-lg">
                    <h1 className='text-xl font-semibold text-black'>EXCEPTIONS</h1>
                    <p className="mt-5">
                        Deliverable items like print and bind service can’t be returned or exchanged once the order has been placed and processed. <br />
                        All items purchased on sale can not be returned for an exchange or a refund.
                    </p>
                </div>

                <div className="mt-10 text-lg space-y-3">
                    <h1 className='text-xl font-semibold text-black'>HOW TO INITIATE A RETURN</h1>
                  
                    <p className="mt-5">To initiate the return process, email us at thebooks@gmail.com with the following details:</p>
                    <ol className="list-disc">
                            <li>Order number</li>
                            <li>Pictures of the product(s) received along with packaging</li>
                            <li>Reason for return</li>
                        </ol>
                        <p >
                        Thank you for your understanding and cooperation.
                    </p>
                </div>

                <div className="mt-10 text-lg">
                    <h1 className='text-xl font-semibold text-black'>QUESTIONS</h1>
                    <p className="mt-5">
                        If you have any questions about our Exchange & Refund Policy, please contact us:                
                    </p> <br />

                    <ul className='list-decimal'>
                        <li>By email: thebooks@gmail.com</li>
                        <li>By phone call: 03195586305</li>
                        <li>By WhatsApp: 03195586305</li>
                    </ul>
        
                </div>

               
            </div>


        </div>
    )
}

export default Return
