import React from 'react'

const WebPage = ({data}) => {
  return (
    <div>
        {data?.items.map((result)=>{
           <div> {result.title} {alert(result)} </div>
        })}
    </div>
  )
}

export default WebPage