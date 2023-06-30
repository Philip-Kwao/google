import React from 'react'

const Button = ({btnTitle}) => {
  return (
    <button className='rounded bg-stone-100 py-2 px-5 text-sm font-light hover:shadow mx-3 bg-opacity-50'>{btnTitle}</button>
  )
}

export default Button