import RemoveIcon from "../assets/RemoveIcon"

export type TaskType = {
	task: string,
	status: boolean
}

type TaskProps = {
	task: string,
	status: boolean,
	index: number,
	changeStatus: Function
	deleteTask: Function
	
}

export default function Task({task, status, index, changeStatus, deleteTask}:TaskProps) {

	function handleClick(){
		var newStatus:boolean = (status)? false : true
		changeStatus(index, newStatus);
	}

	return (
		<div className="flex justify-between items-center gap-3 p-3 bg-white rounded-md">
			<button 
			onClick={handleClick} 
			className="flex justify-start items-center gap-3 bg-white rounded-md"
			>
				<input readOnly checked={status} type="checkbox" className="w-4 h-4"/>
				<div>{task}</div>
			</button>

			<button onClick={()=>{deleteTask(index)}}>
				<RemoveIcon />
			</button>
		</div>
	)
}
