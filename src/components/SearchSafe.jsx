"use client"
import React, { useState } from 'react'
import { RiArrowDownSFill, RiArrowUpFill, RiArrowUpSFill } from 'react-icons/ri'
import SafeSearch from './SafeSearch'

const SearchSafe = () => {
    const [safe, setSafe] = useState(false)
    const handleSafeSearch = () => {
        setSafe(!safe)
    }
  return (
    <>
            <div className={`${safe===true?'bg-indigo-100 hover:bg-indigo-300':''} flex px-4 py-2 to-slate-500 text-sm font-light cursor-pointer hover:bg-slate-100 rounded-lg mr-12`} onClick={handleSafeSearch}>
                <span>Safe Search</span>
                <span className='text-xl'>{safe===false ? <RiArrowDownSFill /> : <RiArrowUpSFill />} </span>
            </div>
            {
                safe===true ?
                (<div className="">
                        <SafeSearch />
                </div>):
                ""
            }
    </>
  )
}

export default SearchSafe