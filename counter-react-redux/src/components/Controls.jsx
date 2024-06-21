import { useDispatch } from "react-redux";
import { useRef } from "react";

const Controls = () => {
  const dispatch = useDispatch();

  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handlePrivacyToggle = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };
  const handleSub = () => {
    dispatch({
      type: "DELETE",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
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
