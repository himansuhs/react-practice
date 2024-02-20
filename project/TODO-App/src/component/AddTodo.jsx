import { useRef } from "react";
import { IoAddOutline } from "react-icons/io5";

function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [todoDate, setTodoDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();
  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfClicks.current += 1;
  // };
  // const handleDateChange = (event) => {
  //   setTodoDate(event.target.value);
  //   console.log(`noofclicks :${noOfClicks.current}`);
  // };
  const handleAdd = (event) => {
    event.preventDefault();

    // setTodoDate("");
    // setTodoName("");
    // console.log(event);
    const todoName = todoNameElement.current.value;
    const todoDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    onNewItem(todoName, todoDate);
  };

  return (
    <div class="container text-center">
      <form className="row hs-row" onSubmit={handleAdd}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={todoNameElement}
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div class="col-4">
          <input
            type="date"
            // value={todoDate}
            ref={dueDateElement}
            // onChange={handleDateChange}
          />
        </div>
        <div class="col-2">
          <button
            class="btn btn-success hs-button "
            // onClick={handleAdd}
          >
            <IoAddOutline />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
