import TaskCard from './TaskCard'
import {TaskContext} from '../context/TaskContext'
import { useContext } from "react";

function TaskList() {

  const {tasks} = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1 className='text-white font-bold text-4xl text-center'>No hay ninguna tarea</h1>;
  }

  return (
    <div className='grid grid-cols-5 gap-2'>
      {tasks.map((task) => (
         <TaskCard key= {task.id} task={task}  />
        ))}
       
    </div>
  );
}

export default TaskList;
