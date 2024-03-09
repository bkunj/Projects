import AppTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/23",
    },
    {
      name: "Go To College",
      dueDate: "4/10/23",
    },
    {
      name: "Play Cricket",
      dueDate: "4/10/23",
    }
  ];

  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
        <AppTodo></AppTodo>
        <TodoItems todoItems={todoItems}></TodoItems>
      </center>
    </>
  );
}

export default App;
