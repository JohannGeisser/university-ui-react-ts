import { createSlice } from "@reduxjs/toolkit";
import { Department } from "../../../components/interfaces/Department";

interface DeleteAction {
  payload: number;
  type: string;
}

const DEPARTMENT_INITIAL_STATE: Array<Department> = [];

const departmentSlice = createSlice({
  name: "departments",
  initialState: DEPARTMENT_INITIAL_STATE,
  reducers: {
    initDepartments: (
      state,
      action: { payload: Department[]; type: string }
    ) => {
      return action.payload;
    },
    addDepartment: (state, action: { payload: Department; type: string }) => {
      return [...state, action.payload];
    },
    removeDepartment: (state, action: DeleteAction) => {
      const depById = state.find((dep) => dep.departmentId === action.payload);
      if (depById) {
        state.splice(state.indexOf(depById), 1);
      }
    },
  },
});

export const { initDepartments, addDepartment, removeDepartment } =
  departmentSlice.actions;

export default departmentSlice.reducer;
