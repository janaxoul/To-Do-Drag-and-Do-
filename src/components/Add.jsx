  import React from 'react'
  import {IoIosAdd} from 'react-icons/io'
  import { AiFillHome } from "react-icons/ai";
  function Add({icon}) {
    switch (icon) {
      case "add":
        return (
          <div className='cursor-pointer fixed right-10 top-[85vh] h-16 w-16 p-4 rounded-full bg-purple-600 flex items-center justify-center 
                      transition-all duration-300 ease-in-out transform 
                      hover:rotate-90 hover:bg-green-500 hover:p-2'>
          <IoIosAdd size="3rem" />
          </div>)
      case "home":
        return(
          <div className='cursor-pointer fixed right-10 top-[85vh] h-16 w-16 p-4 rounded-full bg-purple-600 flex items-center justify-center 
                      transition-all duration-300 ease-in-out transform 
                       hover:bg-green-500 hover:p-3'>
          <AiFillHome  size="3rem" />
          </div>)
    }
    


  }

  export default Add