import { useEffect, useReducer } from "react";

import { ModelsContext } from "./context";
import {reducer, initialState} from "./reducer"

export const ModelsProvider = ({ children }) => {
  const [users, dispatch] = useReducer(reducer, initialState)
  return (
    <ModelsContext.Provider value={[users, dispatch]}>
      {children}
    </ModelsContext.Provider>
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

export function GetModel(modelId) {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/models/${modelId}`)
            .then(response => response.json())
            .then(data => {
                dispatch({type: 'GET_MODEL', payload: data});
            })
    }, [])
    return state.models
}

export function GetCart() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        fetch('http://127.0.0.1:8000/cart/')
            .then(response => response.json())
            .then(data => {
                dispatch({type: 'GET_CART', payload: data});
            })
    }, [])
    return state.cart
}


