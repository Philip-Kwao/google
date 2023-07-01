import React from 'react'

const FilterItems = () => {
  return (
    <div className="flex flex-col items-center bg-white w-[6rem] h-fit shadow-2xl rounded-xl mt-2 text-sm font-light absolute justify-center z-10">
                <span className='h-8 hover:bg-slate-100 w-full text-center cursor-pointer my-1'>Images</span>
                <span className='h-8 hover:bg-slate-100 w-full text-center cursor-pointer my-1'>Videos</span>
                <span className='h-8 hover:bg-slate-100 w-full text-center cursor-pointer my-1'>Maps</span>
                <span className='h-8 hover:bg-slate-100 w-full text-center cursor-pointer my-1'>News</span>
                <span className='h-8 hover:bg-slate-100 w-full text-center cursor-pointer my-1'>Books</span>
                <span className='h-8 hover:bg-slate-100 w-full text-center cursor-pointer my-1'>Finance</span>
            </div>
  )
}

export default FilterItems