import React from 'react'
import Items from './Items'

const SafeSearch = () => {
  return (
    <div className='flex flex-col bg-white z-20 shadow-xl absolute h-full text-sm font-light py-2 w-52 right-10'>
        <Items title={'Filter explicit results'} itemLink={''} />
        <Items title={'Blur explicit images'} itemLink={''} />
        <Items title={'Off'} itemLink={''} />
        <span className='w-full h-[1px]  bg-slate-200'></span>
        <Items title={'More about SafeSearch'} itemLink={''} color={'text-indigo-700'} />

    </div>
  )
}

export default SafeSearch