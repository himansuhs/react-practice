import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import DeleteTodo from "./component/DeleteTodo";
import "./App.css";
import TodoItems from "./component/TodoItems";
import WelcomeMessage from "./component/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";
function App() {
  const [todoItems, setTodoItems] = useState([]);
  const onNewItem = (itemName, itemDueDate) => {
    // console.log(`${itemName} and ${itemDueDate}`);
    // const newTodoItems = [
    //   ...todoItems,
    //   { name: itemName, duedate: itemDueDate },
    // ];
    setTodoItems((currentValue) => [
      ...currentValue,
      { name: itemName, duedate: itemDueDate },
    ]);
  };
  const deleteHandle = (todoItemsName) => {
    const newTodoItems = todoItems.filter(
      (item) => item.name !== todoItemsName
    );
    setTodoItems(newTodoItems);
    console.log(todoItemsName);
  };

  return (
    <TodoItemsContext.Provider value={todoItems}>
      <center className="todo-content">
        <AppName></AppName>
        <AddTodo onNewItem={onNewItem}></AddTodo>
        <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
        <TodoItems todoItems={todoItems} deleteClick={deleteHandle}></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
