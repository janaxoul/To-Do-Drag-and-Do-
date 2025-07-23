import React, { useContext, useEffect, useState } from 'react'
import { IoIosClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import bgImage from '../assets/meme.jpg';


import { motion } from "motion/react"
import { TodoContext } from '../utils/Context';


function Card({ data, reference, onDelete, handleCard}) {
    const {markTodoCompleted, setcompleted, setTodo } =useContext(TodoContext);
    const [completedAnim, setCompletedAnim] = useState(false);
    const handleComplete = async () => {
  setCompletedAnim(true); // Start fade-out animation
  setTimeout(async () => {
    const updatedTodo = await markTodoCompleted(data.id);

    // Remove from todo and completed lists
    setTodo(prev => prev.filter(item => item.id !== data.id));
    setcompleted(prev => prev.filter(item => item.id !== data.id));
    }, 700); // ⏳ wait for fade-out to complete
  };
    
  return (
    <motion.div
    layout
  drag
  dragConstraints={reference}
  whileDrag={{ scale: 1.05 }}
  initial={{ opacity: 1, scale: 1 }}
  animate={{ opacity: completedAnim ? 0 : 1, scale: completedAnim ? 0.95 : 1 }}
  exit={{ opacity: 0, scale: 0.9 }}
  transition={{ duration: 0.7 }}
  className='relative flex-shrink-0 h-[16rem] w-[40%] max-w-[300px] sm:max-w-[260px] md:max-w-[240px] lg:max-w-[260px] xl:max-w-[300px] 
             bg-zinc-800/95 rounded-3xl text-white overflow-hidden m-2'
>
  {/* 🔥 Background image for fade-out animation */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: completedAnim ? 1 : 0 }}
    transition={{ duration: 0.7 }}
    className="absolute inset-0 bg-cover bg-center pointer-events-none rounded-3xl"
    style={{
      backgroundImage: `url('${bgImage}')`, // 🔁 Replace with your path
      zIndex: 90,
    }}
  />

  {/* ✅ Card content over the image */}
  <div className="relative h-full flex-shrink bg-zinc-800/95 z-10 py-9 px-7">
    <span className='flex gap-2 items-center justify-between font-semibold'>
      <h2 className='text-xl md:text-2xl'>{data.title}</h2>
    </span>

    <p className='text-sm md:text-base mt-4 font-medium leading-tight'>
      {data.description}
    </p>

    <div className="footer absolute bottom-0 left-0 w-full">
      <div className="tag flex items-center justify-between w-full px-5 py-2 bg-[#454ADE]">
        {data.completed == false ? (
          <span
            onClick={() => handleCard(data.id)}
            className='w-7 h-7 rounded-full bg-zinc-700 flex items-center justify-center cursor-pointer hover:bg-yellow-500'>
            <MdModeEdit size="1.2em" color="white" />
          </span>
        ) : (
          <div></div>
        )}

        <h3 className='text-xs text-white md:text-sm font-semibold'>
          {data.completed ? 'Completed' : 'Pending'}
        </h3>

        <span
          onClick={handleComplete}
          className={`w-7 h-7 rounded-full bg-zinc-700 flex items-center justify-center cursor-pointer ${data.completed?'hover:bg-red-500':'hover:bg-green-400'}`}>
          {data.completed || completedAnim ? (
            <IoIosClose size="1.2em" color="white" />
          ) : (
            <FaCheck size="1.2em" color="white" />
          )}
        </span>
      </div>
    </div>
  </div>
</motion.div>
  );
}

export default Card;