import Link from 'next/link'
import React from 'react'

const Items = ({ itemLink, title, color }) => {
  return (
    <Link className={`${color} hover:bg-slate-200 w-full h-8 text-center pt-1`} href={itemLink}>{title}</Link>
  )
}

export default Items