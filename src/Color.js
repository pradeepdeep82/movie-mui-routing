import React from 'react';
import { useReducer } from "react";

const initialState={color:""};
const reducer= (state,action)=>{
  switch (action.type){
    case"inputColor":{
      return {color: action.payload};
    }

  default:
    return state;
  }
}
export function Color() {
  const [state, dispatch]=useReducer(reducer, initialState);
  const styles={
    backgroundColor: state.color,
    fontSize:"1.5rem",
    fontWeight:'bold'
  };
  return (
    <div>
      <br/>
      <input
        style={styles}
        placeholder="Enter a color" 
        onChange={(event)=>dispatch({ type:"inputColor", payload:event.target.value })}/>
      {/* <button >Add color</button> */}

    </div>
  );
}
