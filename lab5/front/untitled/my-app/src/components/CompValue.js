import React, { useContext } from "react";
import { Context } from "./Context";

export default function ComponentB() {
    const [context, setContext] = useContext(Context);
    return <div className="card-title">Значение: {context}</div>;
}