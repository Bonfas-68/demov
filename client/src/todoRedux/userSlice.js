import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: {
    user: {
      username: "omanyu",
      email: "omanyu@gmail.com",
      token: "null",
      id: "",
    },
    
  },
  reducers: {
    login: (state, action)=>{
      state.user = action.payload;
    },
    logout: (state)=>{
        state.user = null
    }
  },
});
export const { login,addtodos } = userSlice.actions;
export default userSlice.reducer;
