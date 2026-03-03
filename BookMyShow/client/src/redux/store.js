import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "../redux/loaderSlice";
import userReducer from "../redux/userSlice";

const store = configureStore({
  reducer: {
    loaders: loaderReducer,
    users: userReducer,
  },
});

export default store;
