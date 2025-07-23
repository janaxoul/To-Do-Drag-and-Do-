import React from 'react'
import Background from './Background'
import Foreground from './Foreground'

function Completed() {
  return (
    <div className='w-full min-h-screen max-h-fit bg-zinc-900 relative'>
      <Background page={"completed"}/>
      <Foreground page={"completed"}/>
    </div>
  )
}

export default Completed