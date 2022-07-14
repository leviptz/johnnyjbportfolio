import React, { useState } from 'react'


export const Main = () => {
  const [beats] = useState(["beat1", "beat2", "beat3"])

  return (
    <main className='bg-waves h-96 aspect-960/300 bg-no-repeat bg-cover w-full'>
      <div className='mt-20 flex content-center justify-center flex-wrap'>
        {beats.map(beat => {
          return (
            <div className='mt-10 mx-20 p-10 bg-lightPrimary drop-shadow-lg rounded-xl'>{beat}</div>
          )
        })}
      </div>
    </main>
  )
}
