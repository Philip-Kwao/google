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
                <form onSubmit={handleSubmit} className="flex items-center border rounded-full h-12 w-full group shadow">
                    <div className="border flex h-[3rem] lg:w-[600px]  items-center rounded-full border-slate-200">
                        <button type='submit' className="cursor-pointer text-xl text-blue-700 font-bold mx-4">
                            <AiOutlineSearch />
                        </button> 
                        <input value={term} type="text" className='flex flex-1 focus:outline-none mx-1' onChange={(e)=>setTerm(e.target.value)} />
                        <div className="flex items-center">
                            <div className="text-xl text-blue-800 font-black mx-1 cursor-pointer" onClick={removeSearch}>
                                <RxCross2 />
                            </div>
                            <span className="h-8 w-[1px] z-10 bg-slate-300 "></span>
                            <Image src={Mic} width={25} height={25} alt={Mic} className='cursor-pointer mr-2 md:mx-1' />
                            <Image src={Camera} width={25} height={25} alt={Camera} className='cursor-pointer mr-6 md:mx-2' onClick={handleImageClick} />
                        </div>
                    </div>
                </form>
    </div>
  )
}

export default WebSearchBox