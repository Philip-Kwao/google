"use client"
import React, { useState } from 'react'
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri'
import FilterItems from './FilterItems'

const Filter = () => {
    const handleDropDown = () => {
        // alert("It Works")
        setDrop(!drop)
    }
    const [drop, setDrop] = useState(false)
  return (
    <div>
        <div className="">
            <div className={`${drop===true ? 'bg-indigo-200 text-indigo-800 hover:bg-indigo-300' : ''} flex items-center py-2 px-4 rounded-lg hover:bg-slate-100 text-sm font-light cursor-pointer`} onClick={handleDropDown}>
                <span>
                    Filter
                </span>
                <span className='text-xl'>{drop===false ? <RiArrowDownSFill />: <RiArrowUpSFill />} </span>
            </div>
                {drop===true ? <FilterItems /> : ""}
        </div>
    </div>
  )
}

export default Filter