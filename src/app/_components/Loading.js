import React from 'react'
import Image from 'next/image'

function Loading() {
  return (
    <div className="gif-loader">
      <Image
        src="/loader.gif"
        alt="Loading..."
        className="spinner-img"
        width={100} // Adjust width as needed
        height={100} // Adjust height as needed
      />
    </div>
  )
}

export default Loading
