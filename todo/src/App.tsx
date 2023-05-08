import { useState } from "react"
import Task, { TaskProps, TaskType } from "./components/Task"
import AddTask from "./components/AddTask";
import Box from "./components/Box";

function App() {

  const [tasks, settasks] = useState<TaskType[]>([]);
  
  return (
    <section className="bg-background min-h-screen w-screen">
      <div className="max-w-sm mx-auto py-20">
        <h1 className="text-2xl font-semibold">TODO app 💪</h1>
        <div className="flex flex-col gap-4 justify-center mt-5">
          {tasks.map((task:TaskType)=> {
            return(
              <Box>
                <Task task={task.task} status={task.status} />
              </Box>
            )
          })}
          
          <Box>
            <AddTask />
          </Box>

        </div>
      </div>
    </section>
  )
}

export default App
