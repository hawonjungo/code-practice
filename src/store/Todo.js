//import WebRouter from "./components/WebRouter";
import { useStore, actions } from "../store";
import { useRef, useState } from "react";

function Todo() {
  const todoFocus = useRef(null);
  const [isEdit, setIsEdit] = useState(false);
  const [indexEdit, setIndexEdit] = useState(0);

  const [state, dispatch] = useStore();

  // or can use without state.todoInput
  const { todos, todoInput } = state;

  const handleAdd = () => {
    isEdit
      ? dispatch(actions.editTodo(indexEdit))
      : // every time todoInput change the todos will update
        dispatch(actions.addTodo(todoInput));

    // empty string after set todo in put
    dispatch(actions.setTodoInput(""));
    // focus on the input
    todoFocus.current.focus();
    setIsEdit(false);
  };
  const handleEdit = (index) => {
    dispatch(actions.setTodoInput(todos[index]));
    setIsEdit(true);
    setIndexEdit(index);
    todoFocus.current.focus();
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
// edit and remove todos. - done.
