import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import TodoListPage from "./pages/todo-list/TodoList";
import ExpenseTrackerPage from "./pages/expense-tracker/ExpenseTrackerPage";
import HealthTrackerPage from "./pages/health-tracker/HealthTrackerPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="todolist" element={<TodoListPage />} />
          <Route path="expense-tracker" element={<ExpenseTrackerPage />} />
          <Route path="health-tracker" element={<HealthTrackerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
