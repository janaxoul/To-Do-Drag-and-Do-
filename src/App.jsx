import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'
import { Route, Routes } from 'react-router-dom'
import Completed from './components/Completed'
import Home from './components/Home'

function App() {
  return (
    <div className='w-full h-full relative'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/completed' element={<Completed/>}/>
      </Routes>
    </div>
  )
}

export default App