import React from "react";
import { AiFillCheckCircle, AiOutlineDelete } from "react-icons/ai";

const TodoList = ({ todos, setTodos }) => {
  const handleCompleted = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
      })
    );
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div style={{ marginLeft: "40px" }}>
            <button
              className="button-complete task-button"
              onClick={() => handleCompleted(todo)}
            >
              <AiFillCheckCircle />
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <AiOutlineDelete />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
