import React, { useRef } from "react";

const AddToDo = (props) => {
  const toDoInputRef = useRef(null);

  const addNewToDo = () => {
    props.setNextId((prevState) => prevState + 1);
    props.setTodos([
      ...props.todos,
      { id: props.nextId, text: toDoInputRef.current.value },
    ]);
    props.setCompleted(false);

    toDoInputRef.current.value = "";
  };

  return (
    <div className="AddToDo">
      <input
        className="ToDoInput"
        type="text"
        ref={toDoInputRef}
        placeholder="Enter text"
      />
      <button onClick={addNewToDo}> Add </button>
    </div>
  );
};
export default AddToDo;
