import React, { useContext, useEffect, useRef, useState } from 'react'
import Card from './Card'
import { TodoContext } from '../utils/Context';
import Add from './Add';
import AddForm from './AddForm';
import { Link } from 'react-router-dom';
import GotoCompleted from './GotoCompleted';
import { AnimatePresence } from 'motion/react';

function Foreground({page}) {
  const [formShow, setFormShow]=useState(false)
    const ref=useRef(null);
    const {todo, setTodo, completed, setcompleted, getTodo, getCompleted}= useContext(TodoContext)
    const [card, setCard]=useState({ title: '', description: '', completed:false })
    const handleDelete=(id)=>{
      setTodo(prev=> prev.filter(item => item.id!= id))
    }
    const handleCard=(id)=>{
      setFormShow(!formShow)
      console.log(id)
      // console.log((todo.filter(item=>item.id === id)[0]))
      setCard((todo.filter(item=>item.id === id)[0]))
    }
    useEffect(()=>{
      getCompleted();
      getTodo();
    },[])
    switch(page){
    case 'home':
    return (<div ref={ref} className="foreground relative flex gap-5 flex-wrap justify-start items-center p-10 top-0 left-0 z-[3] w-full min-h-screen overflow-auto bg-zinc-800/40">
        <AnimatePresence mode='popLayout'>
          {todo.map((item)=>(
            <Card key={item.id} data={item} handleCard={handleCard} reference={ref} onDelete={handleDelete}/>
          ))}
        </AnimatePresence>
        <Link to={"/completed"}>
        <GotoCompleted/>
        </Link>
        <div onClick={()=>{setFormShow(!formShow); setCard({ title: '', description: '', completed:false })}}>
        <Add icon={"add"}/>
        </div>
        {formShow && <AddForm data={card} form={formShow} setform={setFormShow}/>}
        
    </div>);
    case 'completed':
      return (<div ref={ref} className="foreground relative flex gap-5 flex-wrap justify-start items-center p-10 top-0 left-0 z-[3] w-full min-h-screen overflow-auto bg-zinc-800/40">
        <AnimatePresence mode='popLayout'>
          {completed.map((item)=>(
            <Card key={item.id} data={item} handleCard={handleCard} reference={ref} onDelete={handleDelete}/>
          ))}
        </AnimatePresence>
        <Link to={"/"}>
        <Add icon={"home"}/>
        </Link>
        {formShow && <AddForm data={card} form={formShow} setform={setFormShow}/>}
        
    </div>);
}
  
}

export default Foreground