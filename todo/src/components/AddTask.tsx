import AddIcon from '../assets/AddIcon'

export default function AddTask() {
  return (
    <div className='flex justify-between items-center gap-2'>
        <input className='w-full bg-transparent rounded-sm outline-none' placeholder='Add task...'  />
        <button>
            <AddIcon/>
        </button>
    </div>
  )
}
