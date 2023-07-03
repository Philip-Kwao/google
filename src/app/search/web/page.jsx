import PaginationButtons from '@/components/PaginationButtons'
import WebResults from '@/components/WebResults'
import Link from 'next/link'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

const page = async ({searchParams}) => {
  const apiKey = process.env.API_KEY
  const contextKey = process.env.CONTEXT_KEY
  const startIndex = searchParams.start || '1'
  const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${contextKey}&q=${searchParams.searchTerm}&start=${startIndex}`)

  const data = await res.json()
  // console.log(data)
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
    <div className='lg:mx-80 mt-4 lg:max-w-2xl flex-wrap max-w-sm mx-auto'>
      {results && <WebResults results={data} />}
      
      <div className='flex flex-col '>
        {results && results.map((result)=>(
            <div className="mb-10">
              <Link href={result.link} className='flex flex-col '>
                <h3 className='text-sm mb-1'>{result.title}</h3>
                <div className="flex items-center font-light text-xs text-stone-500 mb-1">
                  <span>{result.formattedUrl}</span>
                  <span> <BsThreeDotsVertical /> </span>
                </div>
                <h1 dangerouslySetInnerHTML={{ __html: result.htmlTitle}} className='text-[#1A0DAB] text-2xl mb-1 hover:underline'></h1>
              </Link>
              <p dangerouslySetInnerHTML={{ __html: result.htmlSnippet }}></p>
          </div>
        ))}
      </div> 
      <PaginationButtons />
    </div>
  )
}

export default page