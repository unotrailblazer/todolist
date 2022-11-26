import React from "react";
import {v4 as uuidv4} from "uuid";

const Form = ({inputt,setInputt,todos,setTodos,pendingList,setPendingList, completedList ,setCompletedList}) => {

    const onInputChange = (event) => {
        setInputt(event.target.value)
    }

    const onFormSubmit = (event) =>{
        event.preventDefault();
        // setTodos([...todos, {id:uuidv4(), title:inputt, completed:false}]);
        setTodos([...todos, {id:inputt, title:inputt, completed:false}]);
        // setPendingList([...pendingList, {id:uuidv4(), title:inputt, completed:true}]);
        setPendingList([...pendingList, {id:inputt, title:inputt, completed:true}]);
        // setCompletedList([...completedList, {id:uuidv4(), title:inputt, completed:false}]);
        setCompletedList([...completedList, {id:inputt, title:inputt, completed:false}]);
        setInputt("");
    }

  return (
    <form onSubmit={onFormSubmit}>
      <input type="text"
       placeholder="Enter a Todo..." 
       className="task-input"
       value={inputt}
       required
       onChange={onInputChange}
        />
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
