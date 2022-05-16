import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./user-reducer";
import regularScheduleReducer from "./user-reducer";

export const entitiesReducer = combineReducers({
  user: userReducer,
  regularSchedule: regularScheduleReducer,
});
