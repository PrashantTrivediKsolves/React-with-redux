import { useRef } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/todo.js";
const Todo = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();
  const handleAdd = () => {
    dispatch(todoActions.add(inputElement.current.value));
    inputElement.current.value = "";
  };
  return (
    <>
      <div>
        <input type="text" ref={inputElement} />
        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>
      </div>
    </>
  );
};

export default Todo;
