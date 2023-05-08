export type TaskType = {
	task: string,
	status: boolean
}

export default function Task({task, status}:TaskType) {
	return <button className="flex justify-between items-center">
		<input checked={status} type="checkbox" name="" id="" />
		<div>{task}</div>
	</button>;
}
