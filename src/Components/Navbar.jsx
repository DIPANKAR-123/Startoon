import React from 'react'
 import { AiOutlineArrowLeft } from 'react-icons/ai';
function Navbar() {
  return (

    <div className='flex md:ml-16 w-full h-16 mt-2  border-b-4 shadow items-center   '>
       <AiOutlineArrowLeft className='ml-3 mr-3 mt-2 text-2xl  '/>
        <div className='text-2xl text-[#012E57]'>View patient</div>
    </div>
  )
}

export default Navbar