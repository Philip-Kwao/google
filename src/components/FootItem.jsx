import Link from 'next/link'
import React from 'react'

const FootItem = ({footerLink, footerTitle}) => {
  return (
    <Link className='hover:underline capitalize ml-4 text-sm opacity-50' href={footerLink}>{footerTitle}</Link>
  )
}

export default FootItem