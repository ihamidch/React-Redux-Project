import {configureStore} from '@reduxjs/toolkit';
import todoreducesr from "../Features/todo/todoSlice"
export const store = configureStore({
    reducer:todoreducesr,
})