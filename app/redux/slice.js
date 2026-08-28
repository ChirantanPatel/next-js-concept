const { createSlice, nanoid, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    userAPIData: [],
    users: []
}

export const fetchApiUsers = createAsyncThunk("fetchApiUsers", async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    return result.json();
})

const userSlice = createSlice({
    name: "addUserSlice",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const data = {
                id: nanoid(),
                name: action.payload
            }
            state.users.push(data);
            localStorage.setItem("users", JSON.stringify(state.users));
        },
        removeUser: (state, action) => {
            const data = state.users.filter((item) => {
                return item.id !== action.payload
            });
            state.users = data;
            localStorage.setItem("users", JSON.stringify(data));
        },
        loadUsers: (state) => {
            const users = localStorage.getItem("users");
            state.users = users ? JSON.parse(users) : [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchApiUsers.fulfilled, (state, action) => {
            state.isLoading = false,
                state.userAPIData = action.payload
        })
    }
})

export const { addUser, removeUser, loadUsers } = userSlice.actions;
export default userSlice.reducer;