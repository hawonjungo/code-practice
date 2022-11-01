//import WebRouter from "./components/WebRouter";
import { useStore, actions } from "../store";
import { useRef, useState } from "react";

function Todo() {
  const todoFocus = useRef(null);
  const [isEdit, setIsEdit] = useState(false);

  const [state, dispatch] = useStore();

  // or can use without state.todoInput
  const { todos, todoInput } = state;

  console.log("todoInput: ", todoInput);

  const handleAdd = (index) => {
    console.log("isEdit", isEdit);
    isEdit
      ? dispatch(actions.editTodo(index))
      : // every time todoInput change the todos will update
        dispatch(actions.addTodo(todoInput));

    // empty string after set todo in put
    dispatch(actions.setTodoInput(""));
    // focus on the input
    todoFocus.current.focus();
  };
  const handleEdit = (index) => {
    dispatch(actions.setTodoInput(todos[index]));
    setIsEdit(true);
    dispatch(actions.editTodo(index));
  };

  console.log(todos);

  return (
    <div style={{ padding: 20 }}>
      <input
        ref={todoFocus}
        value={todoInput}
        placeholder=" Enter todo..."
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />
      <button onClick={handleAdd}>{isEdit ? "Edit" : "Add"}</button>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}{" "}
          <button
            onClick={() => {
              handleEdit(index);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              dispatch(actions.deleteTodo(index));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
}

export default Todo;

// clear input - empty after click add - done
// focus back on input- done
// edit and remove todos. 1/2
