import React from 'react'
import {BiSolidUserCircle} from 'react-icons/bi'
function Profile() {
  return (
    <div className='flex w-full h-20 justify-between pl-2 pr-2 mt-3 md:ml-16'>
      <div className='flex flex-col'>
        <div><p className='font-semibold'>S.Meena,F/23</p></div>
        <div><p className='font-semibold'>Patient ID: 87 20200727153457</p></div>
      </div>
      <div><BiSolidUserCircle className='text-5xl md:mr-[100px]'/></div>
    </div>
  )
}

export default Profile