import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  onMore: true,
  data: [],
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setOnMore: (state, action) => {
      state.onMore = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData, setOnMore } = infoSlice.actions;
export default infoSlice.reducer;
