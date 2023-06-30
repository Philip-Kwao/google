"use client"
import Camera from '@/assets/images/google-camera.svg'
import Image from 'next/image'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Button from './Button'
import { useRouter } from 'next/navigation'

const SearchBox = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!search.trim()){
      return
    }
    router.push(`/search/web?searchTerm=${search}`)
  }

  const handleImageSearch = () =>{
    if(!search.trim()){
      return
    }
    router.push(`/search/image?searchTerm=${search}`)
  }

  return (
    <form onSubmit={handleSubmit} action="" className="mt-6 text-center">
        <div className="border flex h-[3rem] w-[600px] items-center rounded-full border-slate-200">
            <button type='submit' className="mx-4 text-xl opacity-50">
                <AiOutlineSearch />
            </button>
            <input value={search} type="text" className='flex flex-1 bg-transparent focus:outline-none' onChange={(e)=>setSearch(e.target.value)} />
            <div className="mx-4 cursor-pointer" onClick={handleImageSearch}>
                <Image src={Camera} height={25} width={25} alt='camera' />
            </div>
        </div>
        {/* 2 buttons */}
      <div className="m-5">
        <Button onClick={handleSubmit} btnTitle={'Google Search'} />
        <Button btnTitle={'Feeling Lucky'} />
      </div>
    </form>
  )
}

export default SearchBox