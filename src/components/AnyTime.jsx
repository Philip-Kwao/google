import React from 'react'
import Items from './Items'

const AnyTime = () => {
  return (
    <div className='flex flex-col bg-white z-10 shadow-xl w-[9rem]'>
        <Items title={'Any time'} itemLink={''} />
        <Items title={'Past hour'} itemLink={''} />
        <Items title={'Past 24 hour'} itemLink={''} />
        <Items title={'Past week'} itemLink={''} />
        <Items title={'Past month'} itemLink={''} />
        <Items title={'Past year'} itemLink={''} />
        <Items title={'Custom range...'} itemLink={''} />
    </div>
  )
}

export default AnyTime