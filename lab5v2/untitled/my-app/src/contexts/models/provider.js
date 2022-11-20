import { useEffect, useReducer } from "react";

import { UsersContext } from "./context";
import {reducer, initialState} from "./reducer"

export const UsersProvider = ({ children }) => {
  const [users, dispatch] = useReducer(reducer, initialState)

  return (
    <UsersContext.Provider value={[users, dispatch]}>
      {children}
    </UsersContext.Provider>
  );
};


export function GetModels() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetch('http://127.0.0.1:8000/models/')
        .then(response => response.json())
        .then(data => {
          dispatch({type: 'GET_DATA', payload: data});
        })
  }, [])
  return state.models
}