import React from 'react'
import Background from './Background'
import Foreground from './Foreground'

function Home() {
  return (
    <div className='w-full min-h-screen max-h-fit bg-zinc-900 relative'>
          <Background page={"home"}/>
          <Foreground page={"home"}/>
    </div>
  )
}

export default Home