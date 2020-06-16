// all methods to interact w/ todos

import React, { createContext } from "react";
import todoReducer from '../reducers/todo.reducer';
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";

const defaultTodos = [
    { id: 1, task: "Make new notes for Security study", completed: false },
    { id: 2, task: "Release lady bugs into garden", completed: true }
];

//  create the context itself

export const TodosContext = createContext();
export const DispatchContext = createContext();

// we already have the useTodoState hook that gives us all the pieces we need
// what is missing is a context that will call this hook and then use these pieces and store them as a value for that context
export function TodosProvider(props) {
    const [todos, dispatch] = useLocalStorageReducer("todos", defaultTodos, todoReducer);
    return (
        // in the TodosContext we need to pass just one thing, not an object like before
        <TodosContext.Provider value={todos}>
            {/* pass  the actual value of dispatch - not a new object */}
            <DispatchContext.Provider value={dispatch}>
                {/* the component TodosProvider will wrapp around to whatever the children are */}
                {/* props.children are wrapped in 2 compenents */}
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}