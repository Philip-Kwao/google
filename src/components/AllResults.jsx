import React from 'react'
import Items from './Items'

const AllResults = () => {
  return (
    <div className='flex flex-col bg-white z-10 shadow-xl w-[9rem]'>
        <Items title={'All results'} itemLink={''} />
        <Items title={'Verbatim'} itemLink={''} />
    </div>
  )
}

export default AllResults