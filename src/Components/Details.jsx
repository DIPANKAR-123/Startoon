import React from 'react'
import {BsTelephoneFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {GiKneeCap} from 'react-icons/gi'
import {LiaHospitalAltSolid} from 'react-icons/lia'
import {IoBody} from 'react-icons/io5'
function Details() {
  return (
    <div className='flex md:ml-14'>
      <div className='flex flex-col w-1/2 ml-4'>
    <p className='flex mb-2 text-xl text-gray-400'>Phone No</p>
    <p  className='flex mb-2 text-xl text-gray-400'>Mail ID</p>
    <p  className='flex mb-2 text-xl text-gray-400'>Affected side</p>
    <p  className='flex mb-2 text-xl text-gray-400'>Condition</p>
    <p  className='flex mb-2 text-xl text-gray-400'>Speciality</p>
      </div>
      <div className='flex flex-col w-1/2 mr-1'>
      <div className='flex mb-2 -ml-10 text-xl items-center gap-1'>
          <BsTelephoneFill/>
          <p>9996553546</p>
        </div>
        <div className='flex mb-2 -ml-10 text-xl items-center gap-1'>
          <AiOutlineMail/>
          <p className='text-[0.8rem]'>meenarabinsachin2@gmail.com</p>
        </div>
        <div className='flex mb-2 -ml-10 text-xl items-center gap-1'>
          <IoBody/>
          <p>Billateral</p>
        </div>
        <div className='flex mb-2 -ml-10 text-xl items-center gap-1'>
          <GiKneeCap/>
          <p>Ortho</p>
        </div>
        <div className='flex mb-2 -ml-10 text-xl items-center gap-1'>
          <LiaHospitalAltSolid/>
          <p>Osteoarthritis</p>
        </div>
      </div>
    </div>
  )
}

export default Details