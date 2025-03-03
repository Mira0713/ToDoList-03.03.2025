const ToDoListItem = ({ todo, id, deleteItem, completed, handleChange }) => {
  // const resolvedClass = {
  //   textDecoration: "line-through",
  // };

  return (
    <div>
      <li
        className="ToDoListItem"
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={() => handleChange(id)}
      >
        {todo.text}
        <button onClick={() => deleteItem(id)}>x</button>
      </li>
    </div>
  );
};

export default ToDoListItem;
