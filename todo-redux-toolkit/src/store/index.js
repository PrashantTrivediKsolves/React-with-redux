import {configureStore} from "@reduxjs/toolkit"
import todoSlice from "./todo";

const todoStore = configureStore({reducer: {
  todo: todoSlice.reducer,
}});

export default todoStore;