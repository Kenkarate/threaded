import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage for persistence

const initialState = {
  user: null, // Stores logged-in user details
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload; // Save user details
    },
    logoutUser: (state) => {
      state.user = null; // Clear user details
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;

const persistConfig = {
  key: "auth",
  storage,
};

export default persistReducer(persistConfig, authSlice.reducer);