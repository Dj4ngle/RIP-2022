import React, { useContext } from "react";
import { Context } from "./Context";

export default function ComponentA() {
    const [context, setContext] = useContext(Context);
    return (
        <div>
            <button className="buttons" onClick={() => setContext(context + 1)}>
                Увеличить
            </button>
        </div>
    );
}