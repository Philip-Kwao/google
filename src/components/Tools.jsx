"use client"
import React, { useState } from 'react'
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri'
import AnyTime from './AnyTime'
import AllResults from './AllResults'

const Tools = () => {
    const [drop, setDrop] = useState(false)
    const [allResults, setAllResults] = useState(false)
    const [toolDrop, setToolDrop] = useState(false)
    const handleTools = ()=> {
        // alert("Tools")
        // setDrop(!drop)
        setToolDrop(!toolDrop)
    }
    const handleAnyTime = () =>{
        setDrop(!drop)
        setAllResults(false)
    }
    const handleAllResults = () =>{
        setAllResults(!allResults)
        setDrop(false)
    }
  return (
    <div className="hidden lg:flex">
        <div  className={`${toolDrop === true ? 'bg-indigo-100 hover:bg-indigo-200':''} text-sm font-light hover:bg-slate-100 py-2 px-4 text-center rounded-lg cursor-pointer`} onClick={handleTools}>Tools</div>

        { toolDrop === true ? <div className="flex items-center text-center text-sm font-light absolute bottom-[-2rem] transition-all ease-in-out duration-150 -translate-x-16">
            <div className="flex items-center cursor-pointer mx-4" onClick={handleAnyTime}>
                <div className="flex">
                    <span>Any time</span>
                    <span className='text-xl'>{drop===false ? <RiArrowDownSFill />: <RiArrowUpSFill />} </span>
                </div>
                <div className="absolute z-20 top-6 -left-5">
                    {drop===true ? <AnyTime /> : ""}
                </div>
            </div>
            <div className="flex items-center cursor-pointer" onClick={handleAllResults}>
                <div className="flex">
                    <span>All results</span>
                    <span className='text-xl'>{allResults===false ? <RiArrowDownSFill />: <RiArrowUpSFill />} </span>
                </div>
                <div className="absolute z-20 top-8 -right-7">
                    {allResults===true ? (
                        <>
                            <AllResults />
                        </>
                        ) : ""}
                </div>
            </div>
        </div> : ""}
    </div>
  )
}

export default Tools