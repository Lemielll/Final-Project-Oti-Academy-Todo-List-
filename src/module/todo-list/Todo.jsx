import Container from "../../components/Container";
import {useState} from "react";
import { Plus } from "lucide-react";
import { Trash2Icon } from "lucide-react";
import { FilterIcon } from "lucide-react";
import TodoStats from "./TodoStats";
import TodoForm from "./TodoForm";
import TodoHistory from "./TodoHistory";

function Todo() {

  const [todos, setTodos] = useState([
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if(inputValue.trim() === "") return;
    const newTodo = {
      id: todos.length +1,
      title: inputValue,
      completed: false,
      createdAt: new Date().toISOString(),
    }

    setTodos(() => [...todos, newTodo])
    setInputValue("");
  }

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
  }


  const totalTasks = todos.length;
  const completedTasks = todos.filter(todo => todo.completed).length;
  const activeTasks = totalTasks - completedTasks;

  const [filter, setFilter] = useState("all");
  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
  return true;
  });

  const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleString("en-US", {
    year: "numeric", month: "numeric", day: "numeric",
    hour: "2-digit", minute: "2-digit", hour12: true
  }).replace("," , " at");
  };


  return (
    <>
      <Container>
      {/* Stats */}
        <TodoStats totalTasks={totalTasks} activeTasks={activeTasks} completedTasks={completedTasks}/>
      {/* <section className="flex gap-4 justify-between mb-8">
        <div className="flex flex-col rounded bg-base-100 card-body p-4">
          <div>
            Total Tasks
          </div>
          <p className="text-3xl text-orange-400 font-bold">{totalTasks}</p>
        </div>
        <div className="flex flex-col rounded bg-base-100 card-body p-4">
         <div>
          Active Tasks
         </div>
          <p className="text-3xl text-yellow-400 font-bold">{activeTasks}</p>
        </div>
        <div className="flex flex-col rounded bg-base-100 card-body p-4">
          <div>
            Completed
          </div>
          <p className="text-3xl text-green-500 font-bold">{completedTasks}</p>
        </div>
        <div className="rounded bg-slate-700">
        </div>
    </section> */}

      {/* Input Task */}
      <TodoForm handleAddTodo={handleAddTodo} inputValue={inputValue} setInputValue={setInputValue}/>
      {/* <section className="mb-12">
        <div className="rounded bg-base-100 card-body">
          <p className="text-xl text-amber-50 mb-5">Add New Task</p>
          <div className="flex flex-row gap-2">
          <form className="flex flex-row gap-4 w-115/116" onSubmit={handleAddTodo}>
            <input className="rounded input input-bordered focus:input-primary p-2 w-full" type="text" placeholder="What needs to be done?" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <button className={`w-34 rounded transition duration-200 ease-in-out flex justify-center items-center gap-2 ${!inputValue.trim()? "bg-neutral-800 text-neutral-700" : "bg-orange-400 cursor-pointer text-black hover:brightness-75 active:brightness-100"}`} disabled={!inputValue.trim()} type="submit"> <Plus className="h-4 w-4"></Plus>Add Task</button>
          </form>
          </div>
        </div>
      </section> */}

      {/* Render Task */}
      <TodoHistory totalTasks={totalTasks} activeTasks={activeTasks} completedTasks={completedTasks} todos={todos} setTodos={setTodos} handleDeleteTodo={handleDeleteTodo} formatDate={formatDate} filteredTodos={filteredTodos} filter={filter} setFilter={setFilter}/>
      {/* <section>
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
      </section> */}
      </Container>
    </>
  );
}

export default Todo;
