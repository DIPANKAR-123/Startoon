import React from 'react'
import {AiOutlineFilePdf} from 'react-icons/ai'
function Medical() {
  return (
    <div>
      <div className=' bg-[#7d7d7d] h-[0.1rem] md:ml-16'></div>
      <div className='flex  flex-row w-full h-[4rem] md:ml-16  '>
        <div className='flex font-semibold w-[35%] items-center gap-2 text-[0.8rem] ml-1 md:text-[1.2rem] '>
          <AiOutlineFilePdf/>
          <p>Medical history</p>
        </div>
        <div className='flex text-[0.9rem] w-[1/2] ml-1 items-center'>
          <p>Hypertension,DM,Hypothyrodism</p>
        </div>
      </div>
      <div className=' bg-[#7d7d7d] h-[0.1rem] md:ml-16'></div>
    </div>
  )
}

export default Medical