import { useState } from "react"
import Task, {TaskType} from "./components/Task"
import AddTask from "./components/AddTask";

function App() {

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
  
  return (
    <section className="bg-background min-h-screen w-screen px-8">
      <div className="max-w-sm mx-auto py-20">
        <h1 className="text-2xl font-semibold">TODO app 💪</h1>
        <div className="flex flex-col gap-4 justify-center mt-5 transition-all">
          {tasks.map((task:TaskType, i:number)=> 
            <Task key={i} index={i} task={task.task} status={task.status} changeStatus={changeStatus} />
          )}
          
          <AddTask addTask={addTask} />
        </div>
      </div>
    </section>
  )
}

export default App
