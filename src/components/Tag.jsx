import React from 'react'

const Tag = ({title}) => {
  return (
    <button className={`px-6 py-2 border rounded-full  text-sm font-light`}>{title}</button>
  )
  
}

export default Tag