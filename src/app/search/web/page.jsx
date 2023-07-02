import React from 'react'

const page = async ({searchParams}) => {
  const apiKey = process.env.API_KEY
  const contextKey = process.env.CONTEXT_KEY
  const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${contextKey}&q=${searchParams.searchTerm}`)

  const data = await res.json()
  // console.log(data)
  const results = data.items
  
  return (
    <div className='m-10'>
      {results && results.map((result)=>(
        <div> {result.title} </div>
      ))}
    </div>
  )
}

export default page