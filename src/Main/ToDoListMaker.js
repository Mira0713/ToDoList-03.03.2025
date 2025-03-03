import React from "react";
import { useState } from "react";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";

const ToDoListMaker = () => {
  const [nextId, setNextId] = useState(1);
  const [todos, setTodos] = useState([{ id: 0, text: "Sleep" }]);
  const [completed, setCompleted] = useState(false);

  return (
    <div>
      <AddToDo
        nextId={nextId}
        setNextId={setNextId}
        setTodos={setTodos}
        todos={todos}
        completed={completed}
        setCompleted={setCompleted}
      />
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default ToDoListMaker;
