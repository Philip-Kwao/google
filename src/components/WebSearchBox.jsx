'use client'
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { RxCross2 } from 'react-icons/rx'
import Camera from '@/assets/images/google-camera.svg'
import Mic from '@/assets/images/google-mic.svg'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'

const WebSearchBox = () => {
    const searchParams = useSearchParams()
    const searchTerm = searchParams.get('searchTerm')
    const [term, setTerm] = useState(searchTerm || '')
    const router = useRouter()
    
    const removeSearch = () => {
        setTerm("")
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!term.trim()){
            return
        }
        router.push(`/search/web?searchTerm=${term}`)
        // alert(term)
    }
    const handleImageClick = (e) => {
        e.preventDefault()
        if(!term.trim()){
            return
        }
        router.push(`/search/image?searchTerm=${term}`)
    }
  return (
    <div>
        {/* searchbox */}
            {/* tags */}
            <div className="flex items-center flex-col xl:min-w-[35rem] 2xl:min-w-[43rem] lg:ml-10 ">
                <form onSubmit={handleSubmit} className="flex items-center border rounded-full h-12 w-full group shadow">
                     <button type='submit' className="cursor-pointer text-xl text-blue-700 font-bold  mx-4">
                        <AiOutlineSearch />
                    </button> 
                    <input value={term} type="text" className='flex flex-1 focus:outline-none mx-4' onChange={(e)=>setTerm(e.target.value)} />
                    <div className="text-xl text-blue-800 font-black mx-4 cursor-pointer" onClick={removeSearch}>
                        <RxCross2 />
                    </div>
                    <span className="h-8 w-[0.5px] z-10 bg-slate-300 "></span>
                    <Image src={Mic} width={30} height={30} alt={Mic} className='cursor-pointer lg:ml-4' />
                    <Image src={Camera} width={30} height={30} alt={Camera} className='cursor-pointer mx-4' onClick={handleImageClick} />
                </form>
                
        </div>
    </div>
  )
}

export default WebSearchBox