import { createSlice } from "@reduxjs/toolkit";

export const currentAdsSlice = createSlice({
  name: "currentAds",
  initialState: {
    value: {
      ads: [],
    },
  },
  reducers: {
    setCurrentAds: (state, action) => {
      state.value.ads = action.payload;
    },
  },
});

export const { setCurrentAds } = currentAdsSlice.actions;

export default currentAdsSlice.reducer;
