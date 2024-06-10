import React, { useReducer } from 'react'

const initialState = 0;
const reducer =(state, action)=> {
    if(action.type === 'INCREMENT') {
        return state + 1;
    }
    if(action.type === 'DECREMENT') {
        return state - 1;
    }
    return state;
}

const [state, dispatch] = useReducer(reducer, initialState)

function Reducer() {
  return (
    <>
      <div>
        <p>{state}</p>
        <button onClick={() => dispatch({type: "INCREMENT"})}>Increment</button>
        <button onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
      </div>
    </>
  )
}

export default Reducer
