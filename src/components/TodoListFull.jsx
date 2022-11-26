import React, { useState } from "react";
import "../App.css";

import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";

const TodoListFull = ({
  completedList,
  setCompletedList,
  pendingList,
  setPendingList,
}) => {
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
          pendingList={pendingList}
          setPendingList={setPendingList}
          completedList={completedList}
          setCompletedList={setCompletedList}
        />
      </div>
      <div>
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedList={completedList}
          setCompletedList={setCompletedList}
          pendingList={pendingList}
          setPendingList={setPendingList}
        />
      </div>
    </div>
  );
};

export default TodoListFull;
