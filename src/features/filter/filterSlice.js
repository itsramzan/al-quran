import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  placeSelect: "",
  langSelect: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    searched: (state, action) => {
      state.search = action.payload;
    },
    placeSelected: (state, action) => {
      state.placeSelect = action.payload;
    },
    langSelected: (state, action) => {
      state.langSelect = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { searched, placeSelected, langSelected } = filterSlice.actions;
