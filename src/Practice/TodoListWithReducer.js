import "./App.css";
import { useReducer } from "react";

//useReducer
/*
1. Init state
2. Actions
3. Reducer
4. Dispatch
*/

//1. Init state
const initState = {
  job: "",
  jobs: [],
};
//2. Actions
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";
// payload is the data transmission
const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};
const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};
const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};
//3. Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      return {
        ...state,
        jobs: newJobs,
      };
    default:
      throw new Error(" Invalid action");
  }
};

function TodoReducer() {
  const [state, dispatch] = useReducer(reducer, initState);

  //distructuring
  const { job, jobs } = state;
  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
  };

  return (
    <div style={{ padding: "50px" }}>
      <h3> Todo</h3>
      <br />
      <input
        value={job}
        placeholder="Enter task"
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <br />
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}{" "}
            <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoReducer;
