import React from 'react'
import Icon from '@/assets/images/icon.png'
import Image from 'next/image'
import Link from 'next/link'
import Language from './Language'

const Business = () => {
  return (
    <>
        <div className='flex items-center text-sm font-light'>
            <Image src={Icon} width={30} height={30} alt={Icon} />
            <span className='ml-1'>Apply for Google's</span> <Link href={''} className='ml-1 text-blue-700'>online business bootcamp</Link>
        </div>
        <div className='text-sm font-light mt-12'>
            <span>Google offered in:</span>
            <Language langLink={''} language={'Hausa'} /> 
            <Language langLink={''} language={'Akan'} /> 
            <Language langLink={''} language={'Ewe'} /> 
            <Language langLink={''} language={'Ga'} /> 
        </div>
    </>
  )
}

export default Business