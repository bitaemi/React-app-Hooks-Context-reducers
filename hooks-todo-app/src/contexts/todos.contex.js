// all methods to interact w/ todos

import React, {createContext} from "react";
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [
    {id: 1, task: "Make new notes for Security study", completed: false},
    {id: 2, task: "Release lady bugs into garden", completed: true} 
];

//  create the context itself

export const TodosContext = createContext();
// we already have the useTodoState hook that gives us all the pieces we need
// what is missing is a context that will call this hook and then use these pieces and store them as a value for that context
console.log(TodosContext)
export function TodosProvider(props) {
    const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(defaultTodos);
    return (
        <TodosContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo, editTodo } }>
            {/* the component TodosProvider will wrapp around to whatever the children are */}
            {props.children}
        </TodosContext.Provider>
    )
}