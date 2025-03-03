import ToDoListItem from "./ToDoListItem";

const ToDoList = ({ todos, setTodos }) => {
  const deleteItem = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    console.log(id);
  };

  const handleChange = (id) => {
    console.log("changed", id);
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <ul className="ToDoList">
        {todos.map((todo) => {
          return (
            <ToDoListItem
              todos={todos}
              todo={todo}
              key={todo.id}
              id={todo.id}
              deleteItem={deleteItem}
              handleChange={() => handleChange(todo.id)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
