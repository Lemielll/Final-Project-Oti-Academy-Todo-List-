import React from 'react'
import { FilterIcon } from "lucide-react";
import { Trash2Icon  } from 'lucide-react';


function TodoHistory({totalTasks, activeTasks, completedTasks, todos, setTodos, handleDeleteTodo, formatDate, filteredTodos, filter, setFilter}) {
  return (
     <section>
        <div className="flex justify-center gap-2">

        <button onClick={() => setFilter("all")} className={`rounded p-4 cursor-pointer btn btn-sm hover:border-black ${filter === "all" ?   "bg-orange-400 text-black" : "border-1 border-white"}`}>
          <p className="flex"> <FilterIcon className="w-4 h-4 mr-3"/> All ({totalTasks})</p>
        </button>
        <button onClick={() => setFilter("active")} className={`rounded p-4 cursor-pointer btn btn-sm hover:border-black ${filter === "active" ?   "bg-yellow-400 text-black" : "border-1 border-white"}`}>
          <p>Active ({activeTasks})</p>
        </button>
        <button onClick={() => setFilter("completed")} className={`rounded p-4 cursor-pointer btn btn-sm hover:border-black ${filter === "completed" ?   "bg-green-500 text-black" : "border-1 border-white"}`}>
          <p>Completed ({completedTasks})</p>
        </button>

        </div>
        <div> 
          <ul className="p-3 flex flex-col gap-4 space-y-2 mt-4">
            {filteredTodos.map((todo) => {
              return (
                <li key={todo.id} className="bg-base-100 rounded p-4 flex items-center gap-4">
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={todo.completed} onChange={() => setTodos(todos.map(t => t.id === todo.id ? { ...t, completed: !t.completed } : t))} className="hidden peer"/>
                      <div className="w-6 h-6 rounded-full border-2 border-white peer-checked:bg-green-500"></div>
                  </label>
                  <div className="flex flex-col justify-center w-15/16">
                  <span className={`font-semibold ${todo.completed ? "line-through text-gray-400" : ""}`}>{todo.title}</span>
                  <p className="textarea-sm">Created: {formatDate(todo.createdAt)}</p>
                  </div>
                  <button className="cursor-pointer rounded hover:scale-135" onClick={() => handleDeleteTodo(todo.id)}> <Trash2Icon className="w-4 h-4"/> </button>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
  )
}

export default TodoHistory