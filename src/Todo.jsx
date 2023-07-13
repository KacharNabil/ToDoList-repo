import { useState } from "react";
import {AiFillCheckCircle,AiOutlineDelete} from 'react-icons/ai';
import {MdAddTask} from 'react-icons/md';

let index = 0;
export default function Todo() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="flex h-screen ">
        <div className="m-auto">
            <div className="m-8 p-10 shadow-lg shadow-indigo-500/40 bg-white rounded-lg">
                <div className="flex justify-center items-center gap-3">
                <h1 className="text-2xl text-center mb-2 font-semibold text-teal-700">Get Things Done:) </h1>
                <MdAddTask className="text-2xl text-orange-500"/>
                </div>
                <input
                
                    className="border-2 rounded-full bg-gray-200 p-2 px-4 my-3 focus:border-teal-500 outline-none ring-0 font-medium"
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                />
            
                <button
                
                    className="bg-orange-500 rounded-full p-2 px-5 text-white font-medium ml-4"
                        onClick={() => {
                        setTaskList([...taskList, { id: index++, task: task }]);
                        }}
                >
                    Add
                </button>

                <ul>
                    {taskList.map((tasks) => (
                    
                    <li className="text-gray-700 font-medium pl-3 py-2 flex justify-between gap-2 items-center"
                        key={tasks.id}>
                            <AiFillCheckCircle className="text-blue-500" /> {tasks.task}{" "} 
                            <button className="text-2lg text-red-600"
                            onClick={() => {
                                setTaskList(taskList.filter((a) => a.id !== tasks.id));
                            }}
                            >
                            
                            <AiOutlineDelete/>
                            </button> 
                           
                    </li>
                    ))}
                </ul>
            </div>
      </div>
    </div>
  );
}