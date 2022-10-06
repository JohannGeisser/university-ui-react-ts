import { createSlice } from "@reduxjs/toolkit";
import { Student } from "../../../components/interfaces/Student";

const INITIAL_ENROLL_STATE: Student[] = [];

interface Enroll {
  payload: Student[];
  type: string;
}

const enrollSlice = createSlice({
  name: "enroll",
  initialState: INITIAL_ENROLL_STATE,
  reducers: {
    initNotEnrolled: (state, action: Enroll) => {
      return action.payload;
    },
    newEnroll: (state, action: { payload: Student; type: string }) => {
      return state.filter(
        (student) => student.studentId !== action.payload.studentId
      );
    },
    newAvailable: (state, action: { payload: Student; type: string }) => {
      return [...state, action.payload];
    },
  },
});

export const { initNotEnrolled, newEnroll, newAvailable } = enrollSlice.actions;

export default enrollSlice.reducer;
