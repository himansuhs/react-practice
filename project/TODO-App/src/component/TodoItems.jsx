import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import DeleteTodo from "./DeleteTodo";
const TodoItems = ({ todoItems, deleteClick }) => {
  const todoItemFromContext = useContext(TodoItemsContext);
  console.log(todoItemFromContext);
  return (
    <div className="todo-item">
      {todoItems.map((item) => (
        <DeleteTodo
          key={item.name}
          tododate={item.duedate}
          todoname={item.name}
          deleteClick={deleteClick}
        ></DeleteTodo>
      ))}
    </div>
  );
};
export default TodoItems;
