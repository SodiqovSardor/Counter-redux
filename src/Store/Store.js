import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../Reducers/CounterReducer.jsx"

export const store = configureStore({
  reducer: {
    counter: CounterReducer
  }
})
