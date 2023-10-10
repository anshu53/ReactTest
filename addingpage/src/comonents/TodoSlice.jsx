import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  inputfield: "",
  isediting: "",
  tooglesubmit: true,
  id: 1,
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      const newtodo = {
        id: state.id++,
        text: action.payload,
        ischecked: false,
      };
      state.todos.push(newtodo);
      state.inputfield = "";
    },

    removetodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
      state.inputfield = "";
    },

    resettodo: (state, action) => {
      console.log("hi delete");
      return {
        ...state,
        todos: [],
        inputfield: "",
      };
    },

    checkboxtodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, ischecked: !todo.ischecked }
          : { ...todo };
      });
      state.inputfield = "";
    },

    editing: (state, action) => {
      return {
        ...state,
        isediting: action.payload,
      };
    },

    submitediting: (state, action) => {
      const editedlist = state.todos.map((newvalue) => {
        return newvalue.id === state.isediting
          ? { ...newvalue, text: action.payload }
          : newvalue;
      });
      return {
        ...state,
        todos: editedlist,
        isediting: "",
        inputfield: "",
        tooglesubmit: true,
      };
    },

    setInputfield: (state, action) => {
      state.inputfield = action.payload;
    },

    setTooglesubmit: (state) => {
      state.tooglesubmit = false;
    },

    cancelEdit: (state) => {
      return {
        ...state,
        tooglesubmit: true,
        inputfield: "",
      };
    },
  },
});

export const {
  addtodo,
  removetodo,
  resettodo,
  checkboxtodo,
  editing,
  submitediting,
  setInputfield,
  setTooglesubmit,
  cancelEdit,
} = TodoSlice.actions;
export default TodoSlice.reducer;
