import React from 'react';
import { useReducer } from "react";

//Single source of truth - It contains all data

const initialState = { count: 1, color: "red" };
const reducer = (state, action) => {
  // switch, state - current value
  switch (action.type) {
    case "increment": {
      return { ...state, count: state.count + 1 };
    }
    case "decrement": {
      return { ...state, count: state.count - 1 };
    }
    case "reset": {
      return { color:state.color, count: action.payload };
    }
    case "color": {
      return { ...state, color: action.payload };
    }
    default:
      return state;
  }
};

export  function Color() {
  const [state, dispatch] = useReducer(reducer, initialState); // subscribing
  return (
    <div className="App">
      {/* updated store value */}
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      {/* use the same useReducer to compelete task */}
      <button onClick={() => dispatch({ type: "reset", payload: 0 })}>
        Reset
      </button>
      <input
        value={state.color}
        style={{ background: state.color }}
        onChange={(event) =>
          dispatch({ type: "color", payload: event.target.value })
        }
      />
    </div>
  );
}

// { type: "increment" } - action

// flow
// View -> dispatch action -> Reducer -> Store -> View (new data)
