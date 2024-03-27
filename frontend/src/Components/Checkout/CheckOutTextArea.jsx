import React from 'react'

const CheckOutTextArea = () => {
  return (
    <div>
         <label for="message" class="block mb-2 text-sm font-medium text-black dark:text-white">Order Notes (Optional)</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm border-[1px] text-gray-900 bg-white rounded-lg  border-gray-300 focus:ring-gray-700 focus:border-gray-700 dark:bg-white dark:border-gray-700 dark:placeholder-white dark:text-white dark:focus:ring-black dark:focus:border-black" placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
    </div>
  )
}

export default CheckOutTextArea