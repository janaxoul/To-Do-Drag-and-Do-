import React, { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../utils/Context'

function AddForm({data, form, setform}) {
  const {postTodo, setTodo, getTodo, getCompleted}=useContext(TodoContext);
  const [formData, setFormData] = useState(data);
  const handleChange=(e)=>{
    const {name, value}=e.target;
    setFormData(prev=>({...prev,[name]:value}))
    console.log(formData)
  }
  const handleSubmit=(e)=>{
    console.log(formData)
    e.preventDefault();
    postTodo(formData);
    setTodo(prev => {
      const exists = prev.some(item => item.id === formData.id);
      return exists ? prev.map(item => item.id === formData.id ? formData : item) : [...prev, formData];
    })
    setform(false);
    setFormData({ title: '', description: '', completed:false })
  }
  useEffect(()=>{
        getCompleted();
        getTodo();
      },[])

  
  return (
    <div onClick={()=>setform(!form)} className='w-full z-990 h-full absolute top-0 left-0 bg-zinc-800/45 flex items-center justify-center'>
        <form onSubmit={handleSubmit} onClick={(e)=>e.stopPropagation()} className='p-10 h-[70vh] w-1/3 border-[1px] bg-zinc-900 rounded-3xl grid grid-col-3' action="post">
            <label className='text-white font-semibold w-full text-2xl flex flex-col gap-2 items-start'> Title
              <input onChange={handleChange} required className='border-[1px] px-3 py-2 w-full rounded-xl text-xl' type="text" name='title' value={formData.title} />
            </label>
            <label className='text-white font-semibold w-full text-2xl flex flex-col gap-2 items-start'>Description
              <textarea onChange={handleChange} required className='border-[1px] px-3 py-2 w-full rounded-xl h-35 text-lg' value={formData.description} name="description" id="" cols="5"></textarea>
            </label>
            <div className='w-full flex px-10 flex items-center justify-evenly'>
              <button className='cursor-pointer px-3 py-2 w-1/3 text-white bg-green-500 font-semibold text-white rounded-3xl hover:bg-[#00ff6a] hover:text-zinc-700 hover:bg-[linear-gradient(20deg,_rgba(0,_255,_106,_1)_0%,_rgba(237,_221,_83,_1)_80%)]' type="submit" placeholder='Submit' value="" >Submit</button>
              <button onClick={()=>setform(!form)} className='cursor-pointer px-3 py-2 w-1/3 text-white bg-[#FCB045] font-semibold text-white rounded-3xl hover:text-zinc-700 hover:bg-[#ffb752] hover:bg-[linear-gradient(38deg,rgba(255,_183,_82,_1)_53%,_rgba(255,_0,_132,_1)_100%)]'>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default AddForm