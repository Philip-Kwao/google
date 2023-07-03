import React from 'react'
import SearchInfo from './SearchInfo'
import WebPage from './WebPage'

const SearchAPI = async ({data}) => {
  return (
    <div>
        <SearchInfo results={data} />
        <WebPage results={data} />
    </div>
  )
}

export const getSearchApi = async ({searchParams}) => {
    
    const apiKey = process.env.API_KEY
    const contextKey = process.env.CONTEXT_KEY
    
        const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${contextKey}&q=${searchParams.searchTerm}`)
      
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
}}

export default SearchAPI