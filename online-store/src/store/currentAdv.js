import { createSlice } from "@reduxjs/toolkit";

export const currentAdvSlice = createSlice({
  name: "currentAdv",
  initialState: {
    value: {
      adv: {},
    },
  },
  reducers: {
    setCurrentAdv: (state, action) => {
      state.value.adv = action.payload;
    },
  },
});

export const { setCurrentAdv } = currentAdvSlice.actions;

export default currentAdvSlice.reducer;
