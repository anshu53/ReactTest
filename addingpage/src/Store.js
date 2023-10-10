import { configureStore } from "@reduxjs/toolkit";

import TodoReducer from "./comonents/TodoSlice";
export const store = configureStore({
    reducer: {
        todo: TodoReducer
    }
})