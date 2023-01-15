import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newValue: "",
  list: [],
};

export const todoSlice = createSlice({
  name: "todoList",
  initialState: initialState,
  reducers: {
    changeNewValue: (state, action) => {
      state.newValue = action.payload;
    },
    addToList: (state, action) => {
      state.list.push(action.payload);
      state.newValue = "";
    },
    deleteFromList: (state, action) => {
      state.list.splice(action.payload, 1);
    },
    changeCompleted: (state, action) => {
      state.list[action.payload].completed =
        !state.list[action.payload].completed;
    },
  },
});

export const { changeNewValue, addToList, deleteFromList, changeCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
