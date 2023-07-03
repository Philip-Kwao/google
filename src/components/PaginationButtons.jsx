"use client"
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const PaginationButtons = () => {
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const searchTerm = searchParams.get('searchTerm')
    const startIndex = +searchParams.get("start") || 1
  return (
    <div className='flex items-center'>
        {startIndex >= 10 && (
            <Link href={`${pathName}?searchTerm=${searchTerm}&start=${startIndex - 10}`}>
                <div className="flex flex-col items-center">
                    <BsChevronLeft className='text-blue-500' />
                    <p className='text-sm hover:underline'>Previous</p>
                </div>
            </Link>
        )}
        {startIndex <= 90 && (
            <Link href={`${pathName}?searchTerm=${searchTerm}&start=${startIndex + 10}`}>
                <div className="mx-10 flex flex-col items-center">
                    <BsChevronRight className='text-blue-500' />
                    <p className='text-sm hover:underline'>Next</p>
                </div>
            </Link>
        )}
    </div>
  )
}

export default PaginationButtons