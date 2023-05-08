import React, { useState } from 'react'
import AddTask from './AddTask';
import Task, { TaskType } from './Task';

type ToDoAddProps = {
    name:string
}

export default function ToDoApp({name}:ToDoAddProps) {
    const [tasks, settasks] = useState<TaskType[]>([]);

    function addTask(newTask:string){
        var newData:TaskType[] = [...tasks]
        newData.push({
        task:newTask,
        status:false
        })
        settasks(newData);
    }

    function changeStatus(index:number, newStatus:boolean){
        var newData:TaskType[] = [...tasks]
        newData[index].status = newStatus;
        settasks(newData);
    }

    function deleteTask(index:number){
        var newData:TaskType[] = [...tasks]
        newData.splice(index,1);
        console.log(newData, index)
        settasks(newData);
    }
  
    return (
        <div className='mb-10 mt-4'>
            <h2 className='mb-3 font-semibold'>{name}</h2>
            <div className="flex flex-col gap-4 justify-center transition-all">
                {tasks.map((task:TaskType, i:number)=> 
                    <Task
                        key={i} 
                        index={i} 
                        task={task.task} 
                        status={task.status} 
                        changeStatus={changeStatus} 
                        deleteTask={deleteTask}
                    />
                )}
        
                <AddTask addTask={addTask} />
            </div>
        </div>
    )
}
