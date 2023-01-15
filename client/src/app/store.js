import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "../features/ReduxStateTodoList/TodoSlice";

export const store = configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});
