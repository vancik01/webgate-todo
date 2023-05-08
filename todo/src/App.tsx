import ToDoApp from "./components/ToDoApp"

function App() {
  
  return (
    
      <section className="bg-background min-h-screen w-screen px-8">
        <div className="max-w-sm mx-auto py-20">
          <h1 className="text-2xl font-semibold">TODO app 💪</h1>
          <ToDoApp name="List 1"></ToDoApp>
          <ToDoApp name="List 2"></ToDoApp>
          <ToDoApp name="List 3"></ToDoApp>
        </div>
    </section>
  )
}

export default App
