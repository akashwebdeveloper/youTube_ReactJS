const { createSlice } = require("@reduxjs/toolkit");

const searchSlice = createSlice({
    name: "search",
    initialState: {},
    reducers: {
        setSearch: (state, action) => {
            state = Object.assign(state, action.payload)
        },
    },
})

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
