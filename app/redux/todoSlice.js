const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'tdoSlice',
    initialState,
    reducers: {
        addTodos: (state, action) => {
            const data = {
                id: nanoid(),
                name: action.payload
            }
            state.todos.push(data);
            console.log(data);
        },
    }
})

export const { addTodos } = todoSlice.actions;
export default todoSlice.reducer;