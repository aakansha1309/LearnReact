import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}

// slice -- reducer ka bda version/ functionality

// function sayHello() {
//     console.log("Hello World");
// }

export const todoSlice = createSlice({  // kind of property - function
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {  // state intital state ka access dega  , action -id & values to call and remove
            const todo = {
                id: nanoid(),
                text: action.payload // payload - object
            }
            state.todos.push(todo)
        },  
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.
            id!== action.payload)
        },
    } 
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer