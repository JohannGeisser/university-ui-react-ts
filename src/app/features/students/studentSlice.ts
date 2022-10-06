import { createSlice } from "@reduxjs/toolkit";
import { Student } from "../../../components/interfaces/Student";

const STUDENT_INITIAL_STATE: Array<Student> = [];

const studentSlice = createSlice({
  name: "students",
  initialState: STUDENT_INITIAL_STATE,
  reducers: {
    initStudents: (state, action: { payload: Student[]; type: string }) => {
      return action.payload;
    },
    addStudent: (state, action: { payload: Student; type: string }) => {
      return [...state, action.payload];
    },
    remStudent: (state, action: { payload: Student; type: string }) => {
      return state.filter(
        (student) => student.studentId !== action.payload.studentId
      );
    },
  },
});

export const { initStudents, addStudent, remStudent } = studentSlice.actions;

export default studentSlice.reducer;
