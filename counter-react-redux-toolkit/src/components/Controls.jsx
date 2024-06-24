import { useDispatch } from "react-redux";
import { useRef } from "react";

import { counterActions } from "../store/counter.js";
import { privacyActions } from "../store/privacy";
const Controls = () => {
  const dispatch = useDispatch();

  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle());
  };

  const handleAdd = () => {
    dispatch(counterActions.add(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handleSub = () => {
    dispatch(inputElement.current.value), (inputElement.current.value = "");
  };
  return (
    <>
      <div ClassName="d-grid gap-4 d-sm-flex justify-content-sm-center  control-row">
        <button type="button" class="btn btn-primary" onClick={handleIncrement}>
          +1
        </button>
        <button type="button" class="btn btn-success" onClick={handleDecrement}>
          -1
        </button>
        <button
          type="button"
          class="btn btn-warning"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>
      <div ClassName="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <input
          type="text"
          placeholder="Enter Number"
          className="number-input"
          ref={inputElement}
        />
        <button type="button" class="btn btn-info" onClick={handleAdd}>
          Add
        </button>
        <button type="button" class="btn btn-danger" onClick={handleSub}>
          Danger
        </button>
      </div>
    </>
  );
};

export default Controls;
