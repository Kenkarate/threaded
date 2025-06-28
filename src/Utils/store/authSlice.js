import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 

const initialState = {
  user: null, 
  formData: null, 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload; 
    },
    logoutUser: (state) => {
      state.user = null; 
    },
    setFormData: (state, action) => {
      state.formData = action.payload; 
    },
    clearFormData: (state) => {
      state.formData = null;
    },
  },
});

export const { loginUser, logoutUser, setFormData, clearFormData } = authSlice.actions;

const persistConfig = {
  key: "auth",
  storage,
};

export default persistReducer(persistConfig, authSlice.reducer);