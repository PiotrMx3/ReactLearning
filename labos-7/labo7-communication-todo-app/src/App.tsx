import "./App.css";
import {useState} from "react";
import TodoList from "./componets/TodoList/TodoList";
import TodoInput from "./componets/TodoInput/TodoInput";

interface TodoItem {
  name: string;
  completed: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (todo: string) => {
    setTodos([...todos, {name: todo, completed: false}]);
  };

  const markCompleted = (index: number, completed: boolean) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? {...todo, completed: completed} : todo,
      ),
    );
  };

  return (
    <>
      <TodoInput onAddTodo={addTodo} />
      <TodoList data={todos} markCompleted={markCompleted} />
    </>
  );
};

export default App;
