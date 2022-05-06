import { configureStore } from "@reduxjs/toolkit";
import reducer from "./combine-reducers";

const store = () => {
  return configureStore({
    reducer: reducer,
  });
};

export default store;
