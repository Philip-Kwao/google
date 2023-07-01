import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Camera from '@/assets/images/google-camera.svg'
import Image from 'next/image'
import Tag from './Tag'

const WebSearchBox = () => {
  return (
    <div>
        {/* searchbox */}
            {/* tags */}
            <div className="flex items-center flex-col w-[43rem] ml-10 ">
                <div className="flex items-center border rounded-full h-12 w-full group shadow">
                    <div className="text-xl text-stone-400 font-bold opacity-50 mx-2 hidden group-hover:block">
                        <AiOutlineSearch />
                    </div>
                    <input type="text" className='flex flex-1 focus:outline-none mx-2' />
                    <Image src={Camera} width={30} height={30} alt={Camera} />
                    <div className="text-xl text-blue-800 font-black mx-4">
                        <AiOutlineSearch />
                    </div>
                </div>
                
        </div>
    </div>
  )
}

export default WebSearchBox