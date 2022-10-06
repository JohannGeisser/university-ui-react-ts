import { createSlice } from "@reduxjs/toolkit";
import { Course } from "../../../components/interfaces/Course";

const COURSE_INITIAL_STATE: Course[] = [];

const courseSlice = createSlice({
  name: "courses",
  initialState: COURSE_INITIAL_STATE,
  reducers: {
    initCourses: (state, action: { payload: Course[]; type: string }) => {
      return action.payload;
    },
    addCourse: (state, action: { payload: Course; type: string }) => {
      return [...state, action.payload];
    },
  },
});

export const { initCourses, addCourse } = courseSlice.actions;

export default courseSlice.reducer;
