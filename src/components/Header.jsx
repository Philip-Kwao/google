import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TbGridDots } from 'react-icons/tb'
import { FaCircleUser, FaRegUserCircle } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='flex mt-4'>
        <div className="flex basis-11/12"></div>
        <div className='flex items-center justify-around basis-1/12'>
            <div className='flex items-center justify-around w-full mr-4'>
                <Link className='text-sm font-light opacity-70 hover:underline mr-4' href={''}>Gmail</Link>
                <Link className='text-sm font-light opacity-70 hover:underline' href={''}>Images</Link>
            </div>
            <div className='flex items-center justify-around w-full mr-9'>
                <TbGridDots className='text-xl cursor-pointer mr-4' />
                {/* <FaCircleUser /> */}
                <FaRegUserCircle className='text-2xl bg-gray-400 rounded-full text-white cursor-pointer' />
            </div>
        </div>
    </div>
  )
}

export default Header