import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./features/students/studentSlice";
import departmentReducer from "./features/departments/departmentSlice";
import courseReducer from "./features/courses/courseSlice";
import enrollReducer from "./features/students/enrollSlice";

export const store = configureStore({
  reducer: {
    students: studentReducer,
    departments: departmentReducer,
    courses: courseReducer,
    enroll: enrollReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
