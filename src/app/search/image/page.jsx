import PaginationButtons from '@/components/PaginationButtons'
import WebResults from '@/components/WebResults'
import Link from 'next/link'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

const page = async ({searchParams}) => {
  const apiKey = process.env.API_KEY
  const contextKey = process.env.CONTEXT_KEY
  const startIndex = searchParams.start || '1'
  const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${contextKey}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`)

  const data = await res.json()
  // console.log(data.image)
  const results = data.items
  if(!results){
    return (
      <div className='m-6 text-center'>
        <h1 className='font-bold mt-36 text-slate-400 my-2'>No Results Found</h1>
        <p>
          <Link className='py-2 px-4 bg-blue-500 hover:bg-blue-400 rounded-full my-4 text-white' href={'/'}>Go Back</Link>
        </p>
      </div>
    )
  }

  return (
    <div className='mt-4 mx-10'>
      {results && <WebResults results={data} />}
      
      <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-5 mx-auto'>
        {results && results.map((result)=>(
            <div className="w-full mx-auto">
              <Link target='_blank' href={result.image.contextLink} className='flex flex-col '>
                <img src={result.link} alt={result.title} className='h-[250px] w-[400px] rounded-xl hover:shadow-lg transition-all duration-150' />
              </Link>
              <Link href={result.displayLink}>
                <h3 className='text-sm mb-1 text-slate-400 hover:underline'>{result.title}</h3>
                <h3 className='text-sm mb-1 text-slate-800 hover:underline'>{result.snippet}</h3>
              </Link>
          </div>
        ))}
      </div> 
          <PaginationButtons />
    </div>
  )
}

export default page