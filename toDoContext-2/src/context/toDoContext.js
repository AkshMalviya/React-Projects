import { createContext, useContext } from "react";

export const toDoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "todo message",
            completed: false
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
})

export const TodoProvider = toDoContext.Provider

export const useTodo = () => {
    return useContext(toDoContext)
}