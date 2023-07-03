import React from 'react'

const SearchInfo = async ({results}) => {
  return (
    <>
        {results.searchInformation.formattedSearchTime}
    </>
  )
}

export default SearchInfo