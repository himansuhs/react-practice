import { AiFillDelete } from "react-icons/ai";
function DeleteTodo({ todoname, tododate, deleteClick }) {
  return (
    <div class="container ">
      <div class="row hs-row">
        <div class="col-6">{todoname}</div>
        <div class="col-4">{tododate}</div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-danger hs-button"
            onClick={() => deleteClick(todoname)}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeleteTodo;
