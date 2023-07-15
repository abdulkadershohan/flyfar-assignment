const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    value: 'JFK',
    showHide: false,
};

const exchangeSlice = createSlice({
    name: "exchangeSlice",
    initialState,
    reducers: {
        changeTo: (state, action) => {
            state.value = action.payload;
        },
        toggleShowHide: (state) => {
            state.showHide = !state.showHide;
        }
    },
});

export default exchangeSlice.reducer;
export const { changeTo, toggleShowHide } = exchangeSlice.actions;