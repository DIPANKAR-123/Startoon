import React from 'react'
import "./Dashboard.css"
import Emg from '../Assets/Emg.jpg';
import Rom from '../Assets/ROM.jpg';
function Dashboard() {
  return (
    <div className='progrees md:ml-16 xl:mr-12'>
    <div className='mb-10  bg-[#002647] rounded-3xl z-10 shadow-xl shadow-gray-600 w-full '>
    <div className='text-center text-2xl mb-4 text-white'>Goal Reached</div>
     <div className='flex justify-evenly'>
     <div className='ml-6 text-2xl mr-3 mb-8' role="progressbar" aria-valuenow={33} aria-valuemin={0} aria-valuemax={100} style={{"--value":"40"}}/>
  <div></div>
      <div className='flex flex-col relative right-3 mr-3 '>
        <div><img  className='mb-2'src={Emg} width={100} alt="" /></div>
        <div><img src={Rom}  width={100}alt="" /></div>
      </div>
     </div>
    </div>
    </div>
  )
}

export default Dashboard