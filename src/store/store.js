import { configureStore, createSlice } from "@reduxjs/toolkit";

//테마모드 state
const themSlice = createSlice({
  name: "theme",
  initialState: "basic",
  reducers: {
    changeTheme: (state, action) => { return action.payload },
  }
});

export const { changeTheme } = themSlice.actions;

export default configureStore({
  reducer: {
    themSlice: themSlice.reducer
  }
})