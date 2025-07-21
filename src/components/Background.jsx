import React from 'react'

function Background() {
  return (
    <div className='w-full h-screen fixed z-[2]'>
    <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 font-semibold text-xl'> Documents.</div>
      <h1 className='text-[16rem] absolute text-zinc-800 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-[700] leading-none tracking-tighter'>Docs.</h1>
    </div>
  )
}

export default Background