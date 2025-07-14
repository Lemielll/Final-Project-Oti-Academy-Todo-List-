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

      {/* Input Task */}
      <TodoForm handleAddTodo={handleAddTodo} inputValue={inputValue} setInputValue={setInputValue}/>


      {/* Render Task */}
      <TodoHistory totalTasks={totalTasks} activeTasks={activeTasks} completedTasks={completedTasks} todos={todos} setTodos={setTodos} handleDeleteTodo={handleDeleteTodo} formatDate={formatDate} filteredTodos={filteredTodos} filter={filter} setFilter={setFilter}/>

      </Container>
    </>
  );
}

export default Todo;
