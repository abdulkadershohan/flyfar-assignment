const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    value: 'JFK',
};

const exchangeSlice = createSlice({
    name: "exchangeSlice",
    initialState,
    reducers: {
        changeTo: (state, action) => {
            state.value = action.payload;
        },

    },
});

export default exchangeSlice.reducer;
export const { changeTo } = exchangeSlice.actions;