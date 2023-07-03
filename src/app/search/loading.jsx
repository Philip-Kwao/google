import React from 'react'
import Loading from '@/assets/images/loader.svg'
import Image from 'next/image'

const loading = () => {
  return (
    <div className='text-center mt-40'>
        <Image src={Loading} width={100} height={100} alt='Loading ...' /> 
    </div>
  )
}

export default loading