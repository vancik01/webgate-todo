import { useEffect, useState } from 'react'
import AddIcon from '../assets/AddIcon'

type AddTaskProps = {
    addTask: Function
}

export default function AddTask({addTask}:AddTaskProps) {
    const [newTask, setnewTask] = useState("")
    const [error, seterror] = useState("");

    function handleOnClick(){
        seterror("")
        if(newTask === "") {
            seterror("You forgot the task content...")
        }else{
            setnewTask("")
            addTask(newTask)
        }
    }    

  return (
    <div>
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
        {error != "" && <div className='text-red-500 text-sm mt-1 ml-3'>{error}</div>}
    </div>
  )
}
