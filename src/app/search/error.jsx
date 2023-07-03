"use client"
import React, { useEffect } from 'react'

const error = ({error, reset}) => {
    useEffect(()=>{
        console.log("Error: ", error)
    },[error])
  return (
    <div className='m-6 text-center'>
        <h1 className='font-bold mt-36 text-slate-400 my-2'>OOPS! Something went wrong whiles searching</h1>
        <button onClick={()=>{reset( )}} className='bg-blue-500 my-2 py-2 px-4 text-white text-sm font-light rounded-full hover:bg-blue-400'>refresh page</button>
    </div>
  )
}

export default error