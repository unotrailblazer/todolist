import React, { useState } from "react";
import "../App.css";

import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";

const TodoListFull = () => {
  const [inputt, setInputt] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="app-wrapper">
      <div>
        <Header name="Todo-List" />
      </div>
      <div>
        <Form
          inputt={inputt}
          setInputt={setInputt}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
      <div>
        <TodoList
          todos={todos}
          setTodos={setTodos}
        />
      </div>
    </div>
  );
};

export default TodoListFull;
