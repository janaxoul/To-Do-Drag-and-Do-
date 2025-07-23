import React from 'react'
import { FaCheckDouble } from "react-icons/fa";


function GotoCompleted() {
  return (
    <div className='cursor-pointer fixed right-10 top-[73vh] h-16 w-16 p-4 rounded-full bg-purple-600 flex items-center justify-center 
                          transition-all duration-300 ease-in-out transform 
                         hover:bg-green-500 hover:p-3'>
              <FaCheckDouble size="3rem" />
    </div>
  )
}

export default GotoCompleted