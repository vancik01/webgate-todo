import { useEffect, useState } from 'react'
import AddIcon from '../assets/AddIcon'

type AddTaskProps = {
    addTask: Function
}

export default function AddTask({addTask}:AddTaskProps) {
    const [newTask, setnewTask] = useState("")

    function handleOnClick(){
        setnewTask("")
        addTask(newTask)
    }    

  return (
    <div className='flex justify-between items-center gap-2 p-3 bg-white rounded-md'>
        <input 
            value={newTask} 
            onChange={(e)=>{setnewTask(e.target.value)}} 
            className='w-full bg-transparent rounded-sm outline-none' 
            placeholder='Add task...'  
        />

        <button onClick={handleOnClick}>
            <AddIcon/>
        </button>
    </div>
  )
}
