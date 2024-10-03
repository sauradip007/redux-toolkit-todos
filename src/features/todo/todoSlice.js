import { createSlice, nanoid } from "@reduxjs/toolkit";
//nanoid generates unique ids

//this denotes the initial state of the store
const initialState = {
    todos: [{
        id:1,
        text:"Hello World"
    }]
}

//name  must be there it is anm inbuilt property
// reducer object has properties and functionalities
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const todo = {
                id:nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo)=>
                action.payload !== todo.id
            )
        },
    }
    // unlike context , we declare and also DEFINE the function in redux

    
})

export const {addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer
