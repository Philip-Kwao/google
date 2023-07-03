import React from 'react'

const WebResults = ({results}) => {
  return (
    <div className='text-sm font-light mb-10'>
        <span className=''>
            About {results?.searchInformation?.formattedTotalResults} results
        </span> 
        <span className='ml-4'>
            ({results?.searchInformation?.formattedSearchTime}) seconds
        </span> 
    </div>
  )
}

export default WebResults