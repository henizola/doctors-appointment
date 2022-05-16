import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "regularSchedule",
  initialState: {
    monday: [],
    tusday: [],
    wednsday: [],
    lastId: 0,
  },
  reducers: {
    addNewSchedule: (schedule, action) => {
      schedule[action.payload.day].push({
        schedule: action.payload.interval,
        id: ++schedule.lastId,
      });
      schedule.lastId++;
    },
    removeSchedule: (schedule, action) => {
      let index = schedule[action.payload.day].find(
        (singleSchedule) => action.payload.id === singleSchedule.id
      );
      schedule[action.payload.day].splice(index, 1);
    },
  },
});

export const { removeSchedule, addNewSchedule } = slice.actions;

export default slice.reducer;
