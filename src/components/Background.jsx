import React from 'react'

function Background({page}) {

  return (
    <div className='w-full min-h-screen fixed z-[2]'>
      <div className='absolute bg-blue-00 top-[1%] w-full flex justify-center text-zinc-600 font-semibold text-3xl'>{page==='home'?"To-do":"Completed."}</div>
        <h1 className='text-[10rem] bg-red-00 whitespace-nowrap w-fit absolute text-zinc-800 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-[700] leading-none tracking-tighter'>Drag-n-Do.</h1>
    </div>
  )
}

export default Background