import { useState, useEffect } from "react";

import { ModelsContext } from "./context1";


export const ModelsProvider = ({ children }) => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch('http://127.0.0.1:8000/models/')
            .then(response => response.json())

            .then(data => {
                setUsers(data);
            })
    }, [])


    return (
        <ModelsContext.Provider value={users}>{children}</ModelsContext.Provider>
    );
};