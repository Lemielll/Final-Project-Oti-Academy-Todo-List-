import React from 'react'
import { Plus } from "lucide-react";


function TodoForm({handleAddTodo, inputValue, setInputValue}) {
  return (
    <section className="mb-12">
        <div className="rounded bg-base-100 card-body">
          <p className="text-xl text-amber-50 mb-5">Add New Task</p>
          <div className="flex flex-row gap-2">
          <form className="flex flex-row gap-4 w-115/116" onSubmit={handleAddTodo}>
            <input className="rounded input input-bordered focus:input-primary p-2 w-full" type="text" placeholder="What needs to be done?" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <button className={`w-34 rounded transition duration-200 ease-in-out flex justify-center items-center gap-2 ${!inputValue.trim()? "bg-neutral-800 text-neutral-700" : "bg-orange-400 cursor-pointer text-black hover:brightness-75 active:brightness-100"}`} disabled={!inputValue.trim()} type="submit"> <Plus className="h-4 w-4"></Plus>Add Task</button>
          </form>
          </div>
        </div>
    </section>
  )
}

export default TodoForm