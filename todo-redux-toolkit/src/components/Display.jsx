import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store/todo.js";
import React, { useState } from "react";
const Display = () => {
  const todoLists = useSelector((store) => store.todo);
  console.log("Display");
  console.log(todoLists);
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const dispatch = useDispatch();
  function handleRemove(id) {
    dispatch(todoActions.handleDelete(id));
  }

  function handleEdit(id, value) {
    setEditId(id);
    setEditValue(value);
  }

  function saveEdit(id) {
    dispatch(todoActions.handleEdit({ id, newValue: editValue }));
    setEditId(null);
    setEditValue("");
  }

  return (
    <ul>
      {todoLists.map((todo) => (
        <li key={todo.id}>
          {editId === todo.id ? (
            <>
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <button onClick={() => saveEdit(todo.id)}>Save</button>
            </>
          ) : (
            <>
              {todo.value}
              <button onClick={() => handleRemove(todo.id)}>Delete</button>
              <button onClick={() => handleEdit(todo.id, todo.value)}>
                Edit
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Display;
