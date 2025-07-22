import React, { useContext, useEffect, useRef, useState } from 'react'
import Card from './Card'
import { TodoContext } from '../utils/Context';
import Add from './Add';

function Foreground() {

    const ref=useRef(null);
    const {todo}= useContext(TodoContext)

  return (
    <div ref={ref} className="foreground fixed flex gap-5 flex-wrap p-5 top-0 left-0 z-[3] w-full h-full bg-sky-800/0">
        {todo.map((item, index)=>(
            <Card key={index} data={item} reference={ref}/>
            ))}
        <Add/>
    </div>
  )
}

export default Foreground