import Link from 'next/link'
import React from 'react'

const Language = ({langLink, language}) => {
  return (
    <Link className='text-blue-700 mx-1' href={langLink}>{language}</Link>
  )
}

export default Language