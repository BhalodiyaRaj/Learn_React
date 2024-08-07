import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  todos: [{ id: 1, text: "Hello world" }]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    updateTodo: (state, { payload: { id, text } }) => {
      const index = state.todos.findIndex(todo => todo.id === id);
      if (index !== -1) {
        state.todos[index].text = text;
      }
    },
    // updateTodo: (state, action) => {
    //   state.todos = state.todos.map(todo =>
    //     todo.id === action.payload.id
    //       ? { ...todo, text: action.payload.text }
    //       : todo
    //   );
    // },
  }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer