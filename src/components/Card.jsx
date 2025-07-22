import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

import { motion } from "motion/react"



function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={1} dragTransition={{bounceStiffness:500, bounceDamping:30}} className='relative flex-shrink-0 w-60 h-70 bg-zinc-800/95 rounded-4xl text-white px-8 py-10 overflow-hidden'>
        <span className='flex gap-2 items-center justify-between '><h2 className='text-xl'>{data.title}</h2></span>
        <p className=' text-sm mt-5 font-semibold leading-tight'>{data.description}</p>
        <div className="footer absolute bottom-0 left-0 bg-green-00 w-full  ">
            <div className='flex justify-between px-8 py-3 items-center mb-0'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 rounded-full bg-zinc-700 flex items-center justify-center'>
                    {data.completed===false?<IoIosClose size="1.3em" color='white' />: <FaCheck  size="1.3em" color='white' />}
                </span>
            </div>
            <div className="tag flex item-center justify-center w-full py-3 bg-blue-600">
                <h3 className='text-md font-semibold '>
                </h3>
            </div>
            
        </div>
    </motion.div>
  )
}

export default Card