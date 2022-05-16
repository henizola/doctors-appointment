import { configureStore } from "@reduxjs/toolkit";
import { entitiesReducer } from "./combine-reducers";

const reducer = () => {
  return configureStore({
    reducer: entitiesReducer,
  });
};

export default reducer;
