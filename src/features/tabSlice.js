const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    selected: 1,
};

const tabSliceSlice = createSlice({
    name: "tabSlice",
    initialState,
    reducers: {
        changeTab: (state, action) => {
            state.selected = action.payload;
        },

    },
});

export default tabSliceSlice.reducer;
export const { changeTab } = tabSliceSlice.actions;