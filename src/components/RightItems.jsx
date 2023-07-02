import React from 'react'
import { AiFillSetting } from 'react-icons/ai'
import { FaRegUserCircle } from 'react-icons/fa'
import { TbGridDots } from 'react-icons/tb'

const RightItems = () => {
  return (
    <div className='items-center text-2xl text-slate-500 opacity-80 hidden md:flex'>
        <AiFillSetting className='mx-2' />
        <TbGridDots className='mx-2' />
        <FaRegUserCircle className='mx-2' />
    </div>
  )
}

export default RightItems